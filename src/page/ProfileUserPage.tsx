import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loginFail, setUser } from '../action/user.action';
import { getUser } from '../api/user.api';
import { getEmail } from '../config/locastorga.config';
import Navigation from '../conponents/navbar/Navigation'
import ContentProfile from '../conponents/profile-user/ContentProfile';
import HeaderProfile from '../conponents/profile-user/HeaderProfile';
interface RouteParams {
    name: string
}

function ProfileUserPage() {
   
    useEffect(() => {
        let email
        console.log('hiu hiu');
        if(getEmail() !== null){
            email = getEmail().email;
        }
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
    console.log(user);
    // const param = useParams<RouteParams>();
    //     console.log(param);
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
