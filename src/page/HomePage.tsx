import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setPost } from '../action/post.action'
import { getPost } from '../api/post.api'
import { auth, loginFail, loginSuccess, setUser } from '../action/user.action'
import { getUser } from '../api/user.api'
import { getEmail } from '../config/locastorga.config'

import Home from '../conponents/home/Home'

function HomePage() {
    const dispatch = useDispatch()

    const history = useHistory()

    let user = useSelector((state: any) => state.UserReducer.user.state)
    let isLogin = useSelector((state: any) => state.LoginReducer.login.isLogin);
    let email = getEmail()?.email;
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
        if (isLogin) {
            history.push('/')
        } else {
            history.push('/login')
        }
    }, [isLogin]);

    useEffect(() => {
        getUser(email).then(user => {
            dispatch(setUser(user))
        })
    }, [])

    return (
        <div>
            {user ? <Home logout={logout} user={user} /> : null}

        </div>
    )
}

export default HomePage
function dispatch(arg0: (dispatch: any) => Promise<boolean>) {
    throw new Error('Function not implemented.')
}

