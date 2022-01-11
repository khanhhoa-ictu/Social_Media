import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changePassword, checkOTP, loginFail, sentEmail } from '../../action/user.action'
import Forgot from '../../conponents/forgotpassword/Forgot'
import CheckOTP from '../../conponents/forgotpassword/CheckOTP'
import NewPassword from '../../conponents/forgotpassword/NewPassword'
import { forgotPassword, requestForgotPassword, verifyForgotPassword } from '../../api/user.api'
function LoginPage() {
    const history = useHistory()
    const dispatch = useDispatch()

    let statusForgot = useSelector((state : any) => state.UserReducer.forgotPassword.statusForgot)

    const [loading,setLoading] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [notificationEmail, setNotificationEmail] = useState('')
    const [notificationCode, setNotificationCode] = useState('')
    const [notificationNewPassword, setNotificationNewPassword] = useState('')
    const [notificationConfirmPassword, setNotificationConfirmPassword] = useState('')

    const getCodeButton = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!email){
            setNotificationEmail('Email is required')
            return;
        }
        else {
            setNotificationEmail('')
        }
        requestForgotPassword(email)
        .then((data) => {
            dispatch(checkOTP())
        })
        .catch((err) => console.log(err))
    }

    const checkCodeButton = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!code){
            setNotificationCode('Code is required')
            return;
        }
        else {
            setNotificationCode('')
        }
        verifyForgotPassword(email,code)
        .then((data) => {
            dispatch(changePassword())
        })
        .catch((err) => console.log(err))
    }

    const changePasswordButton = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!newPassword){
            setNotificationNewPassword('Password is required')
            return;
        }
        else {
            setNotificationNewPassword('')
        }
        if(!confirmPassword){
            setNotificationConfirmPassword('Confirm Password is required')
            return;
        }
        else {
            setNotificationConfirmPassword('')
        }
        if(newPassword === confirmPassword){
            setNotificationConfirmPassword('')
        }
        else {
            setNotificationConfirmPassword('Confirm Password is different Password')
            return;
        }
        forgotPassword(email, code, newPassword)
        .then((data) => {
            dispatch(sentEmail())
            history.push('/login')
        })
        .catch((err) => console.log(err))
    }

    const loginButton = () => {
        dispatch(loginFail())
        dispatch(sentEmail())
        history.push('/login')
    }

    useEffect(()=> {
        setLoading('')
    }, [statusForgot])

    return (
        <div>
            {statusForgot === 'forgot' 
                ? 
                <Forgot 
                    email ={email}
                    notificationEmail = {notificationEmail}
                    setEmail = {setEmail}
                    getCodeButton = {getCodeButton}
                    loginButton = {loginButton}
                />
                : statusForgot === 'checkOTP' 
                    ? 
                    <CheckOTP 
                        code = {code}
                        setCode = {setCode}
                        notificationCode = {notificationCode}
                        checkCodeButton = {checkCodeButton}
                    />
                    : statusForgot === 'changePassword'
                        ? 
                        <NewPassword 
                            newPassword = {newPassword}
                            confirmPassword = {confirmPassword}
                            notificationNewPassword = {notificationNewPassword}
                            notificationConfirmPassword = {notificationConfirmPassword}
                            setNewPassword = {setNewPassword}
                            setConfirmPassword = {setConfirmPassword}
                            changePasswordButton = {changePasswordButton}
                            loginButton = {loginButton}
                        />
                        : null
            }
        </div>
    )
}

export default LoginPage
