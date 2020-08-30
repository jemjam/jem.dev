import importAll from 'import-all.macro'
import { parse } from 'path'
import Link from 'next/link'

export const getStaticProps = () => {
    const files = importAll.sync('./*.mdx')
    const postsArray = Object.keys(files)
        .filter((filePath) => {
            return !filePath.includes('index')
        })
        .map((fullPath) => {
            const pathParts = parse(fullPath)
            console.log('parts', pathParts)
            return pathParts.name
        })

    return {
        props: {
            ye: 'ok',
            files: postsArray,
        },
    }
}

const ListPage = ({ ...allProps }) => {
    console.log('rendering with', allProps)
    return (
        <>
            <p>does this render?</p>
            <ul>
                {allProps.files.map((postName:any) => (
                    <li>
                        <Link href={`/100days/${postName}`}>{postName}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListPage
