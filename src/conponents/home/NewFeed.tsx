import React from 'react'
import PostPage from '../../page/post/PostPage'
import { PostType } from '../../type/postType'
import { UserType } from '../../type/userType'
import PostNoUser from '../post/PostNoUser'

interface Props {
    newsFeed: PostType[],
    user: UserType,
    CommentPost: (profilePicture: string, userId: string, name: string, comment: string, postID: string) => void
    socket:any;
}

const NewFeed = (props: Props) => {
    const { newsFeed, user, CommentPost,socket } = props
    return (
        <div>
            {newsFeed !== undefined
                ? newsFeed.map((post, index) => {
                    if (post.userId === user._id) {
                        return <div key={index}>
                            <PostPage
                                post={post}
                                user={user}
                                CommentPost={CommentPost}
                                socket={socket}
                            />
                        </div>
                    } else {
                        return <PostNoUser
                            key={index}
                            post={post}
                            user={user}
                            CommentPost={CommentPost}
                            socket={socket}
                        />
                    }

                })

                : <p>Hong cho đâu! Em chưa follow anh mà đòi xin in tư của anh!</p>
            }

        </div>
    )
}

export default NewFeed
