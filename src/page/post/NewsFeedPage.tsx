import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../../action/post.action'
import { getPostTimeline } from '../../api/post.api'
import NewsFeed from '../../conponents/home/NewFeed'
import { UserType } from '../../type/userType'

interface Props {
    user : UserType
}

function NewsFeedPage(props : Props) {
    const dispatch = useDispatch()
    
    const {user} = props
    const newsFeed = useSelector((state: any) => state.HomeReducer.post.listPost)
    const isLoading = useSelector((state: any) => state.HomeReducer.post.isLoading)
    useEffect(() => {
        getPostTimeline(user._id)
        .then((data) => {
            dispatch(setPost(data))
        })
        .catch((err) => {
            console.log(err, 'err')
        })
    }, [user,isLoading])

    return (
        <div>
            <NewsFeed 
                newsFeed = {newsFeed}
                user = {user}
            />
        </div>
    )
}

export default NewsFeedPage
