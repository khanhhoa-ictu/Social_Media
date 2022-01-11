import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import { loginFail } from '../action/user.action';
import Navigation from '../conponents/navbar/Navigation'
import SettingUser from '../conponents/settinguser/SettingUser';

function SettingPage() {
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [desc,setDesc] = useState('')
    const [phone,setPhone] = useState('')
    const [gender,setGender] = useState('')
    const [coverPicture,setCoverPicture] = useState('')
    const [address,setAddress] = useState('')


    const changeUser = () =>{

    }
    return (
        <SettingPageStyle className="setting">
            <Navigation logout={logout} />
            <div className='container setting-content d-flex'>
                <div>
                    <NavLink to='setting'>setting user</NavLink>
                    <NavLink to='changepassword'>chage pass</NavLink>
                    <NavLink to='help'>help</NavLink>
                </div>
                <div>
                    <Route path='' render = {()=><SettingUser 
                        userName={userName}
                        email={email}
                        desc={desc}
                        phone={phone}
                        gender={gender}
                        coverPicture={coverPicture}
                        address={address}
                        setEmail={(value)=>setEmail(value)}
                        setUserName={(value) =>setUserName(value)}
                        setDesc={(value)=>setDesc(value)}
                        setPhone={(value) =>setPhone(value)}
                        setGender={(value)=>setGender(value)}
                        setCoverPicture={(value) =>setCoverPicture(value)}
                        setAddress={(value) =>setAddress(value)}
                        changeUser={changeUser}
                    />} />

                  
                </div>
            </div>

        </SettingPageStyle>
    )
}
const SettingPageStyle = styled.div`

    margin-top:100px;

`
export default SettingPage
