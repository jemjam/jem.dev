import importAll from 'import-all.macro'
import { parse } from 'path'

export const getStaticProps = (_: any) => {
    const files = importAll.sync('../../pages/100days/*.mdx')
    const postsArray = Object.keys(files)
        .filter((filePath) => {
            return !filePath.includes('index')
        })
        .map((fullPath) => {
            const pathParts = parse(fullPath)
            console.log('parts', pathParts)
            return pathParts.name
        })

    return { props: { pageContext: 'onehundred!', postsArray } }
}
