import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import { setFollowing } from '../action/flow.action'
import { auth, loginFail, setUser } from '../action/user.action'
import { followUser, getFriendSuggestion, getUser } from '../api/user.api'
import { getEmail } from '../config/locastorga.config'
import Home from '../conponents/home/Home'
import PostDetailPage from './post/PostDetailPage'


function HomePage() {
    const dispatch = useDispatch()

    const history = useHistory()

    let user = useSelector((state: any) => state.UserReducer.user.state)
    let following = useSelector((state: any) => state.FollowingReducer.following.followings)
    let isLogin = useSelector((state: any) => state.LoginReducer.login.isLogin);

    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }

    useEffect(() => {
        const Authentication = async() =>{
            let res = await dispatch(auth());
            if(!res){
              history.push('/login');
            }
          }
          Authentication()
    }, []);

    useEffect(() => {
        let email
        if(getEmail() !== null){
            email = getEmail().email;
        }

        getUser(email).then(user => {
            dispatch(setUser(user))
        })  
    }, [])
    useEffect(() => {
        if(user !== undefined){
            getFriendSuggestion(user._id).then(followings => {
                dispatch(setFollowing(followings))
            })
        }
    },[user])
    const handleFollow = (currentUser:string,UserFollow:string) =>{
        followUser(currentUser,UserFollow)
        .then((data:any) => {
            console.log('Following user success');
        })
        .catch((error:any) =>{
            console.log(error);
        })
    }
    return (
        <div>
            {user ? <Home logout={logout} user={user} following ={following} handleFollow = {handleFollow} /> : null}
            <Route exact path="/post/:id" render={() =>  
            <PostDetailPage  /> }
            />
           
        </div>
    )
}

export default HomePage


