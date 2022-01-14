import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComment } from '../../action/post.action'
import { getCommentByIDPost, submitComment } from '../../api/comment.api'
import { getPostTimeline } from '../../api/post.api'
import NewsFeed from '../../conponents/home/NewFeed'
import { UserType } from '../../type/userType'

interface Props {
    user: UserType,
    newsFeed:any,
}

function NewsFeedPage(props: Props) {
    const dispatch = useDispatch()

    const { user,newsFeed } = props
    // const newsFeed = useSelector((state: any) => state.HomeReducer.post.listPost)
    const comments = useSelector((state: any) => state.HomeReducer.post.comment)
    const isLoading = useSelector((state: any) => state.HomeReducer.post.isLoading)

    // useEffect(() => {
    //     getPostTimeline(user._id)
    //     .then((data) => {
    //         dispatch(setPost(data))
    //     })
    //     .catch((err) => {
    //         console.log(err, 'err')
    //     })
    // }, [user,isLoading])

    
    const CommentPost = (profilePicture: string, userId: string, name: string, comment: string, postID: string) => {
        submitComment(profilePicture, userId, name, comment, postID).then((response: any) => {
            if (response) {
                getCommentByIDPost(postID).then((data: any) => {
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
