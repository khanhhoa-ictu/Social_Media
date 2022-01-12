import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginFail, setUser } from '../action/user.action';
import { getUser } from '../api/user.api';
import { getEmail } from '../config/locastorga.config';
import Navigation from '../conponents/navbar/Navigation'
import ContentProfile from '../conponents/profile-user/ContentProfile';
import HeaderProfile from '../conponents/profile-user/HeaderProfile';

function ProfileUserPage() {
    let email = getEmail()?.email;

    useEffect(() => {
        getUser(email).then(user => {
            dispatch(setUser(user))
        })
    }, [])

    const dispatch = useDispatch()
    const logout = () => {

        localStorage.removeItem("user");
        dispatch(loginFail())
    }
    
    let user = useSelector((state: any) => state.UserReducer.user.state)
    return (
        <div>
            <Navigation logout={logout} user={user} />
            <div className='container'>
                <HeaderProfile />
                <ContentProfile />
            </div>

        </div>
    )
}

export default ProfileUserPage
