import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { auth, loginFail, setUser } from '../action/user.action'
import { changePasswordUser, updateInfor } from '../api/contact'
import { getUser } from '../api/user.api'
import { getEmail } from '../config/locastorga.config'
import AccountSettingDetail from '../conponents/account-setting/AccountSettingDetail'
import AccountSettingNavigation from '../conponents/account-setting/AccountSettingNavigation'
import ChangePassword from '../conponents/account-setting/ChangePassword'
import Help from '../conponents/account-setting/Help'
import ToastAlert from '../conponents/alert/ToastAlert'
import Navigation from '../conponents/navbar/Navigation'

function AccountSettingPage() {
    const dispatch = useDispatch()
    let email = getEmail()?.email;
    const [noti, setNoti] = useState('')
    const [notice, setNotice] = useState('')
    const [oldPassword, setOldPassWord] = useState('')
    const [newPassword, setNewPassWord] = useState('')
    const [confirmPassword, setConfirmPassWord] = useState('')
    const [showAlert, setShowAlert] = useState(false);

    let user = useSelector((state: any) => state.UserReducer.user.state)
    const history = useHistory()

    const submitButton = (name: string, phone: string, address: string, gender: string, desc: string,) => {
        setNoti('');
        setNotice('');
        updateInfor(user.email, name, phone, address, gender, desc)
            .then((data) => {
                dispatch(setUser(data.user))
                setNoti('Thay đổi thông tin thành công')
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 1500)
            })
            .catch((err) => {
                setNoti('Đã sãy ra lỗi vui lòng thử lại')
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 1500)
            })
    }

    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }

    const submitButtonPassWord = () => {
        console.log(oldPassword, newPassword, confirmPassword)
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            setNotice('Không được để trống các trường')
        } else {
            if (newPassword === confirmPassword) {
                setNoti('');
                setNotice('');
                changePasswordUser(oldPassword, newPassword, email)
                    .then((data) => {
                        setNotice('Thay đổi mật khẩu thành công')
                        setShowAlert(true)
                        setTimeout(() => {
                            setShowAlert(false);
                        }, 1500)
                    }).catch((error) => {
                        setNotice('Mật khẩu không chính xác')
                        setShowAlert(true)
                        setTimeout(() => {
                            setShowAlert(false);
                        }, 1500)
                    })
            } else {
                setNoti('')
                setNotice('Mật khẩu không trùng khớp')
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 1500)
                console.log(notice)
            }
        }


    }
    useEffect(() => {
        getUser(email).then(user => {
            dispatch(setUser(user))
        })
    }, [])
    useEffect(() => {
        const Authentication = async () => {
            let res = await dispatch(auth());
            if (!res) {
                history.push('/login');
            }
        }
        Authentication()
    }, []);

    return (
        <>
            <Navigation logout={logout} user={user} />
            <DivFullHeight className="d-flex flex-column align-items-center justify-content-between">
                {user
                    ? <div>
                        <DivStyle className='container px-0 d-flex border rounded'>
                            <div className='col-3 border-end'>
                                <AccountSettingNavigation />
                            </div>

                            <div className='col-9'>
                                <Route exact path="/account/help" render={() => <Help />} />
                                <Route exact path="/account/changepassword" render={() => <ChangePassword
                                    user={user}
                                    oldPassword={oldPassword}
                                    newPassword={newPassword}
                                    confirmPassword={confirmPassword}
                                    submitButtonPassWord={submitButtonPassWord}
                                    setOldPassWord={(value) => setOldPassWord(value)}
                                    setNewPassWord={(value) => setNewPassWord(value)}
                                    setConfirmPassWord={(value) => setConfirmPassWord(value)}
                                />} />

                                <Route exact path="/account/setting" render={() => <AccountSettingDetail
                                    user={user}
                                    email={email}
                                    submitButton={submitButton}
                                />}
                                />
                            </div>
                        </DivStyle>
                    </div>
                    : null}
                <ToastAlert showAlert={showAlert} setShowAlert={setShowAlert} noti={noti ? noti : notice} />
            </DivFullHeight>
        </>
    )
}

const DivStyle = styled.div`
    margin-top: 24px;
    height: 75vh;
    position: relative;
`

const DivFullHeight = styled.div`
    height: 100%;
`

export default AccountSettingPage

