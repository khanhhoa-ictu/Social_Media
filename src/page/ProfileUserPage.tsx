import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loginFail, setUser } from '../action/user.action';
import { getPostUser, getUser } from '../api/user.api';
import { getEmail } from '../config/locastorga.config';
import Navigation from '../conponents/navbar/Navigation'
import ContentProfile from '../conponents/profile-user/ContentProfile';
import HeaderProfile from '../conponents/profile-user/HeaderProfile';
interface RouteParams {
    name: string
}

function ProfileUserPage() {
    let {name} = useParams<RouteParams>()
    console.log(name);
    useEffect(() => {
       getPostUser(name)
       .then((user) => {
        console.log(user);
       })
       .catch((error) => {
           console.log(error);
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
            {
              user &&  <div>
                    <Navigation logout={logout} user={user} />
                    <div className='container'>
                        <HeaderProfile user={user} />
                        <ContentProfile />
                    </div>
                </div>
            }



        </div>
    )
}

export default ProfileUserPage
