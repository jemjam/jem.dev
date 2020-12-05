import importAll from 'import-all.macro'
import { parse } from 'path'
import Link from 'next/link'

const files = importAll.sync('../pages/notes/100days/*.mdx')
const postsArray = Object.keys(files).filter(filePath => {
    return !filePath.includes('index')
}).map(fullPath => {
  const pathParts = parse(fullPath)
  return pathParts.name
})

const OneHundredDays = () => {
    return (
        <>
            <h2>List of pages</h2>
            <ul>
              {postsArray.map(postName => (<li><Link href={`notes/100days/${postName}`}>{postName}</Link></li>))}
            </ul>
        </>
    )
}

export default OneHundredDays