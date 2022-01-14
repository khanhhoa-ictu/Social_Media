import React, { useState, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { auth, loginSuccess, setUser } from '../../action/user.action';
import { loginUser } from '../../api/user.api';

import Login from '../../conponents/login/LoginComponents'

function LoginPage() {
    const history = useHistory()
    const dispatch = useDispatch()

    let isLogin = useSelector((state: any) => state.LoginReducer.login.isLogin)

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [notificationUserName, setNotificationUserName] = useState('')
    const [notificationPassword, setNotificationPassword] = useState('')

    const loginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setNotificationUserName("Email không được trống");
            return;
        } else {
            setNotificationUserName("");
        }
        if (!passWord) {
            setNotificationPassword("Mật khẩu không được trống");
            return;
        } else {
            setNotificationPassword("");
        }

        loginUser(email, passWord)
            .then((data) => {
                const token = data.token
                localStorage.setItem("user", JSON.stringify({ token, email }));
                dispatch(loginSuccess());
                dispatch(setUser(data.user))
            })
        history.push('/')
    }

    useEffect(() => {
        const Authentication = async () => {
            let res = await dispatch(auth());
            if (!!res) {
                history.push('/');
            }
        }
        Authentication()
    }, [isLogin]);


    return (
        <LoginStyle className="d-flex align-items-center flex-column">
            <Login
                loginSubmit={loginSubmit}
                email={email}
                passWord={passWord}
                setEmail={setEmail}
                setPassWord={setPassWord}
                notificationUserName={notificationUserName}
                notificationPassword={notificationPassword}
            />
            <Footer className="text-muted text-center mx-auto mb-4">&copy; 2022 MARGASTNI FROM UNIVERSE</Footer>
        </LoginStyle>
    )
}
const LoginStyle = styled.div`
    background-color : #fafafa;
    height: 100vh;
`

const Footer = styled.p`
    font-size: 12px;
`


export default LoginPage
