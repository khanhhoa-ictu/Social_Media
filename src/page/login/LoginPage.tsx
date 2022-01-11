import React, { useState,FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {auth, loginSuccess} from '../../action/user.action';
import { loginUser } from '../../api/user.api';

import Login from '../../conponents/login/LoginComponents'

function LoginPage() {
    const history = useHistory()
    const dispatch = useDispatch()

    let isLogin = useSelector((state : any) => state.LoginReducer.login.isLogin)

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [notificationUserName, setNotificationUserName] = useState('')
    const [notificationPassword, setNotificationPassword] = useState('')

    const loginSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setNotificationUserName("Email is required");
          return;
        } else {
            setNotificationUserName("");
        }
        if (!passWord) {
            setNotificationPassword("Password is required");
            return;
        } else {
            setNotificationPassword("");
        }

        loginUser(email,passWord)
        .then((data) => {
            const token = data.token
            localStorage.setItem("user", JSON.stringify({token, email}));
            dispatch(loginSuccess())
        })
        .catch((err) => console.log('err1',err))
        history.push('/')
    }

    const forgotButton = () => {
        history.push('/forgot')
    }
    
    const registerButton = () => {
        history.push('/register')
    }
    
    // useEffect(() => {
    //     console.log('truoc',isLogin);
    //     dispatch(auth())
    //     console.log(isLogin);
    //     if (!isLogin) {
    //         history.push('/login')
    //     }
    //     else {
    //         history.push('/')
    //     }
    // }, [isLogin]);

    console.log('sau',isLogin)
    return (
        <div>
            <Login 
                loginSubmit = {loginSubmit}
                forgotButton = {forgotButton}
                registerButton = {registerButton}
                email = {email}
                passWord = {passWord}
                setEmail = {setEmail}
                setPassWord = {setPassWord}
                notificationUserName = {notificationUserName}
                notificationPassword = {notificationPassword}
            />
        </div>
    )
}

export default LoginPage
