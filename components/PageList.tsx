import { FunctionComponent } from 'react'
import Link from 'next/link'

interface ListProps {
    postsArray: Array<string>
}

const ListOfPages: FunctionComponent<ListProps> = ({ postsArray }) => {
    console.log('posts array?', postsArray)
    return (
        <ul>
            {postsArray.map((postName) => (
                <li>
                    <Link href={`100days/${postName}`}>{postName}</Link>
                </li>
            ))}
        </ul>
    )
}

export default ListOfPages
