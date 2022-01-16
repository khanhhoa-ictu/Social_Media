import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams } from 'react-router-dom';
import { loginFail, setUser } from '../action/user.action';
import { getPostUser, getUser } from '../api/user.api';
import { getEmail } from '../config/locastorga.config';
import ModalFollow from '../conponents/account-setting/ModalFollow';
import ModalFollowing from '../conponents/account-setting/ModalFollowing';
import Navigation from '../conponents/navbar/Navigation'
import ContentProfile from '../conponents/profile-user/ContentProfile';
import HeaderProfile from '../conponents/profile-user/HeaderProfile';
import { RootState } from '../reducer';
import { PostType } from '../type/postType';
import { UserType } from '../type/userType';
import PostDetailPage from './post/PostDetailPage';
interface RouteParams {
    name: string
}

function ProfileUserPage() {
    let { name } = useParams<RouteParams>()
    const dispatch = useDispatch()
    let [userProfile, setUserProfile] = useState<UserType>()
    let [post, setPost] = useState<PostType[]>()
    let user = useSelector((state: RootState) => state.UserReducer.user.user)

    useEffect(() => {
        getPostUser(name)
            .then((data) => {
                setUserProfile(data.user);
                setPost(data.post);
                let email
                if (getEmail() !== null) {
                    email = getEmail().email;
                }
                getUser(email).then(user => {
                    dispatch(setUser(user))
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }, [name])


    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }
    return (
        <div>
            {
                userProfile && post && user._id && <div>
                    <Navigation logout={logout} user={user} />
                    <div className='container'>
                        <HeaderProfile userProfile={userProfile} post={post} user={user} />
                        <ContentProfile post={post} />
                    </div>
                </div>

            }
            <Route exact path="/profile/:id" render={() =>
                user && <PostDetailPage user={user} />

            } />
            <Route exact path="/:id/follower" render={() =>
                user && <ModalFollow />

            } />

            <Route exact path="/:id/following" render={() =>
                user && <ModalFollowing />

            } />

        </div>
    )
}

export default ProfileUserPage
