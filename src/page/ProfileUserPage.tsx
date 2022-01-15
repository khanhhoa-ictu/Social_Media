import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginFail, setUser } from '../action/user.action';
import { getUser } from '../api/user.api';
import { getEmail } from '../config/locastorga.config';
import Navigation from '../conponents/navbar/Navigation'
import ContentProfile from '../conponents/profile-user/ContentProfile';
import HeaderProfile from '../conponents/profile-user/HeaderProfile';
import { RootState } from '../reducer';

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
    
    let user = useSelector((state: RootState) => state.UserReducer.user.user)
    console.log(user)
    return (
        <div>
            <Navigation logout={logout} user={user} />
            <div className='container'>
                <HeaderProfile  user = {user}/>
                <ContentProfile />
            </div>

        </div>
    )
}

export default ProfileUserPage
