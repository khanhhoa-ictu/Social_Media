import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../post/Post'

interface Feed {
    id: string,
    name: string,
    avatar: string,
    post: {
        image: string,
        like: number
    }
}

const NewFeed = () => {

    let post = useSelector((state: any) => state.HomeReducer.post.data)
    console.log(post)

    return (
        <div>
            {post.map((feed: Feed) => (
                <Post key={feed.id} />
            ))}
        </div>
    )
}

export default NewFeed
