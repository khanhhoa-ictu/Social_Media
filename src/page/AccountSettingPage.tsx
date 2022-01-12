import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { loginFail, setUser } from '../action/user.action'
import { changePasswordUser, updateInfor } from '../api/contact'
import { getUser } from '../api/user.api'
import { getEmail } from '../config/locastorga.config'
import AccountSettingDetail from '../conponents/account-setting/AccountSettingDetail'
import AccountSettingNavigation from '../conponents/account-setting/AccountSettingNavigation'
import ChangePassword from '../conponents/account-setting/ChangePassword'
import Help from '../conponents/account-setting/Help'
import Navigation from '../conponents/navbar/Navigation'

function AccountSettingPage() {
    const dispatch = useDispatch()
    let email = getEmail()?.email;
    const [noti, setNoti] = useState('')
    const [notice, setNotice] = useState('')
    const [oldPassword, setOldPassWord] = useState('')
    const [newPassword, setNewPassWord] = useState('')
    const [confirmPassword, setConfirmPassWord] = useState('')
    let user = useSelector((state: any) => state.UserReducer.user.state)

    const submitButton = (name: string, phone: string, address: string, gender: string, desc: string,) => {
        updateInfor(user.email, name, phone, address, gender, desc)
            .then((data) => {
                dispatch(setUser(data.user))
                setNoti('Thay đổi thông tin thành công')
                
            })
            .catch((err) => {
                setNoti('Đã sãy ra lỗi vui lòng thử lại')
            })
    }
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }

    const submitButtonPassWord = () => {
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            setNotice('Không được để trống các trường')
        } else {
            if (newPassword === confirmPassword) {
                changePasswordUser(oldPassword, newPassword, email)
                    .then((data) => {
                        setNotice('Thay đổi mật khẩu thành công')
                    }).catch((error) => {
                        setNotice('Mật khẩu không chính xác')
                    })
            } else {
                setNotice('Mật khẩu không trùng khớp')
            }
        }


    }
    useEffect(() => {
        getUser(email).then(user => {
            dispatch(setUser(user))
        })
    }, [user])
    const [test, setTest] = useState('')
    return (
        <div>
            {user
                ? <div>
                    <Navigation logout={logout} user={user} />

                    <DivStyle className='container d-flex '>
                        <div className='col-3 border rounded'>
                            <AccountSettingNavigation />
                        </div>

                        <div className='col-9 border rounded'>
                            <Route exact path="/account/help" render={() => <Help />} />
                            <Route exact path="/account/changepassword" render={() => <ChangePassword
                                notice={notice}
                                user={user}
                                oldPassword={oldPassword}
                                newPassword={newPassword}
                                confirmPassword={confirmPassword}
                                setOldPassWord={(value) => setOldPassWord(value)}
                                setNewPassWord={(value) => setNewPassWord(value)}
                                setConfirmPassWord={(value) => setConfirmPassWord(value)}
                                submitButtonPassWord={submitButtonPassWord}
                            />} />

                            <Route exact path="/account/setting" render={() => <AccountSettingDetail
                                noti={noti}
                                user={user}
                                email={email}
                                submitButton={submitButton}

                            />}
                            />
                        </div>
                    </DivStyle>
                </div>
                : null}




        </div>
    )
}

const DivStyle = styled.div`
margin-top:85px;

`

export default AccountSettingPage

