import React from 'react'
import PostPage from '../../page/post/PostPage'
import { PostType } from '../../type/postType'
import { UserType } from '../../type/userType'

interface Props {
    newsFeed: PostType[],
    user: UserType,
}

const NewFeed = (props: Props) => {
    const { newsFeed, user } = props
    return (
        <div>
            {newsFeed !== undefined
                ? (
                    newsFeed.map((post, index) => (
                        <div key={index}>
                            <PostPage
                                post={post}
                                user={user}
                            />
                        </div>

                    ))
                )
                : <p>Hong cho đâu! Em chưa follow anh mà đòi xin in tư của anh!</p>
            }

        </div>
    )
}

export default NewFeed
