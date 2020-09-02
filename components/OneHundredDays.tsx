import importAll from 'import-all.macro'
import { parse } from 'path'
import Link from 'next/link'

const files = importAll.sync('../pages/100days/*.mdx')
const postsArray = Object.keys(files).filter(filePath => {
    return !filePath.includes('index')
}).map(fullPath => {
  const pathParts = parse(fullPath)
  return pathParts.name
})

const OneHundredDays = () => {
    return (
        <>
            <h1>Experimental page list component</h1>
            <ul>
              {postsArray.map(postName => (<li>ok<Link href={`/100days/${postName}`}>{postName}</Link></li>))}
            </ul>
        </>
    )
}

export default OneHundredDays