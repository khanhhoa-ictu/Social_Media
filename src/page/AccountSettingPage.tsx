import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { loginFail, setUser } from '../action/user.action'
import { changePasswordUser, updateInfor } from '../api/contact'
import AccountSettingDetail from '../conponents/account-setting/AccountSettingDetail'
import AccountSettingNavigation from '../conponents/account-setting/AccountSettingNavigation'
import ChangePassword from '../conponents/account-setting/ChangePassword'
import Help from '../conponents/account-setting/Help'
import Navigation from '../conponents/navbar/Navigation'

function AccountSettingPage() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [gender, setGender] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [noti,setNoti] = useState('')
    const [notice,setNotice] = useState('')

    const [oldPassword,setOldPassWord] = useState('')
    const [newPassword,setNewPassWord] = useState('')
    const [confirmPassword,setConfirmPassWord] = useState('')

    let user  = useSelector((state:any) =>state.UserReducer.user.state)
    console.log(user)

    
    const submitButton = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateInfor(user.email,name, adress, phone, gender)
        .then((data)=> {
            dispatch(setUser(data.user))
            setNoti('Thay đổi thông tin thành công')
        })
        .catch((err) => {
            console.log(err)
            setNoti('Đã sãy ra lỗi vui lòng thử lại')
        })
    }

    const validateForm = () => {
        if(!name || !email || !phone || !adress || !gender){
            setIsSubmit(false)
            return
        }
        setIsSubmit(true)
        return
    }
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }

    useEffect(() => {
        validateForm()
        console.log("hieu")
    }, [name,email,phone,adress,gender])



    // change password
    let emailtest = 'fat.man2619@gmail.com'
    const submitButtonPassWord = () => {
        console.log(oldPassword)
        console.log(newPassword)
        console.log(emailtest)

        if(newPassword === confirmPassword){
            changePasswordUser(oldPassword, newPassword, emailtest)
                .then((data)=>{
                    console.log(data)
                })
        }
        
    }
    const [test, setTest] = useState('')
    return (
        <div>
           
            <Navigation logout = {logout} />
          
            <DivStyle className='container d-flex '>
                <div className='col-3 border rounded'>
                <AccountSettingNavigation /> 
                </div>

                <div className='col-9 border rounded'>
                    <Route exact path="/account/help" render={()=><Help/>} />
                    <Route exact path="/account/changepassword" render={()=><ChangePassword
                            notice={notice}
                            user={user}
                           oldPassword = {oldPassword} 
                           newPassword = {newPassword}
                           confirmPassword = {confirmPassword}
                           setOldPassWord = {(value)=>setOldPassWord(value)}
                           setNewPassWord = {(value)=>setNewPassWord(value)}
                           setConfirmPassWord = {(value)=>setConfirmPassWord(value)}
                           submitButtonPassWord = {submitButtonPassWord}
                    />} />
                    
                    <Route exact path="/account/setting" render={() => <AccountSettingDetail
                            noti={noti}
                            user={user}
                            name = {name}
                            email = {email}
                            adress = {adress}
                            phone = {phone}
                            gender = {gender}
                            isSubmit = {isSubmit}
                            setName = {setName}
                            setEmail = {setEmail}
                            setPhone = {setPhone}
                            setAdress = {setAdress}
                            setGender = {setGender}
                            submitButton = {submitButton}
                            validateForm = {validateForm}
                        />} 
                    />
                </div>
            </DivStyle>
         

        </div>
    )
}

const DivStyle = styled.div`
margin-top:85px;

`

export default AccountSettingPage

