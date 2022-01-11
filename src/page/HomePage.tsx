import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setPost } from '../action/post.action'
import { auth, loginFail, loginSuccess } from '../action/user.action'
import { getPost } from '../api/post'

import Home from '../conponents/home/Home'

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()

    let post  = useSelector((state:any) =>state.HomeReducer.post.data)
    let isLogin = useSelector((state : any) => state.LoginReducer.login.isLogin)

    const getUserFromLocal = () => {
        const local = localStorage.getItem("user")
        if (typeof local === "string") {
            return JSON.parse(local)
        }
        else return null;
    }

    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }

    useEffect(() => {
        dispatch(auth())
    },[]);
    
    console.log('homepage1', isLogin);

    useEffect(() => {
        getPost().then((post)=>{
           dispatch(setPost(post))
        })
        dispatch(auth())
    }, [])
    return (
        <div>
            <Home logout = {logout}/>
        </div>
    )
}

export default HomePage
