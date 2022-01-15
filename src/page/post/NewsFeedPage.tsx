import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComment } from '../../action/post.action'
import { getCommentByIDPost, submitComment } from '../../api/comment.api'
import { getPostTimeline } from '../../api/post.api'
import NewsFeed from '../../conponents/home/NewFeed'
import { RootState } from '../../reducer'
import { CommentType } from '../../type/commentType'
import { PostType } from '../../type/postType'
import { UserType } from '../../type/userType'

interface Props {
    user: UserType,
    newsFeed:PostType[],
}

function NewsFeedPage(props: Props) {
    const dispatch = useDispatch()

    const { user,newsFeed } = props
    const CommentPost = (profilePicture: string, userId: string, name: string, comment: string, postID: string) => {
        submitComment(profilePicture, userId, name, comment, postID).then((response:  {msg : string}) => {
            if (response) {
                getCommentByIDPost(postID).then((data: {data : CommentType[]}) => {
                    dispatch(setComment(data))
                })
            }
        })

    }
    return (
        <div>
            <NewsFeed
                CommentPost={CommentPost}
                newsFeed={newsFeed}
                user={user}
            />
        </div>
    )
}

export default NewsFeedPage
