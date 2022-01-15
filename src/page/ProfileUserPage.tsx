import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams } from 'react-router-dom';
import { loginFail, setUser } from '../action/user.action';
import { getPostUser, getUser } from '../api/user.api';
import { getEmail } from '../config/locastorga.config';
import Navigation from '../conponents/navbar/Navigation'
import ContentProfile from '../conponents/profile-user/ContentProfile';
import HeaderProfile from '../conponents/profile-user/HeaderProfile';
import { PostType } from '../type/postType';
import { UserType } from '../type/userType';
import PostDetailPage from './post/PostDetailPage';
interface RouteParams {
    name: string
}

function ProfileUserPage() {
    let { name } = useParams<RouteParams>()
    let [userProfile, setUser] = useState<UserType>()
    let [post, setPost] = useState<PostType[]>()
    let user = useSelector((state: any) => state.UserReducer.user.user)

    useEffect(() => {
        getPostUser(name)
            .then((data) => {
                setUser(data.user)
                setPost(data.post)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [name])

    const dispatch = useDispatch()
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }
    return (
        <div>
            {
                userProfile && post && <div>
                    <Navigation logout={logout} user={user} />
                    <div className='container'>
                        <HeaderProfile userProfile={userProfile} post={post}  />
                        <ContentProfile post={post} />
                    </div>
                </div>
                
            }
            <Route exact path="/profile/:id" render={() =>
                user &&  <PostDetailPage user = {user} />
            
            }
               
            />


        </div>
    )
}

export default ProfileUserPage
