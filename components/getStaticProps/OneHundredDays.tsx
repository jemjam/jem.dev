import importAll from 'import-all.macro'
import { parse } from 'path'

/**
 * List out all of the posts available in the 100days directory
 */

export const getStaticProps = (_: any) => {
    const files = importAll.sync('../../pages/notes/100days/*.mdx')
    console.log('files?', files)
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
