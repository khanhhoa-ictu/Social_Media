import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../action/post.action'
import { getPost } from '../api/post'
import Home from '../conponents/home/Home'

function HomePage() {
    const dispatch = useDispatch()
    let post = useSelector((state: any) => state.HomeReducer.post.data)
    console.log(post)

    useEffect(() => {
        getPost().then((post) => {
            dispatch(setPost(post))
        })
    }, [])
    return (
        <div>
            <Home />
        </div>
    )
}

export default HomePage
