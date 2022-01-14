import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { setFollowing } from '../action/flow.action'
import { auth, loginFail, setUser } from '../action/user.action'
import { getPostTimeline } from '../api/post.api'
import { followUser, getFriendSuggestion, getUser } from '../api/user.api'
import { getEmail } from '../config/locastorga.config'
import Home from '../conponents/home/Home'
import PostDetailPage from './post/PostDetailPage'


function HomePage() {
    const dispatch = useDispatch()

    const history = useHistory()

    let user = useSelector((state: any) => state.UserReducer.user.state)
    let following = useSelector((state: any) => state.FollowingReducer.following.followings)
    // let isLogin = useSelector((state: any) => state.LoginReducer.login.isLogin);

    
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
    const [loading, setLoading] = useState(true);
    const [newsFeed, setNewFeed] = useState([]);
    const [page, setPage] = useState(0);
    const handleScroll = (event:any) => {
        console.log('object');
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    
        if (scrollHeight - scrollTop === clientHeight) {
          setPage(prev => prev + 1);
        }
      };

    useEffect(() => {
        if(user){
        const loadUsers = async () => {
            setLoading(true);
            getPostTimeline(user._id, page).then((data) => {
                let test = newsFeed.concat(data);
                setNewFeed(test);
                setLoading(false);
            })

        };
        loadUsers();
        }
    }, [page,user]);
    return (
        <AppStyle onScroll={handleScroll}>
            {user ? <Home logout={logout} user={user} following ={following} handleFollow = {handleFollow} newsFeed ={newsFeed} /> : null}
            <Route exact path="/post/:id" render={() =>  
            <PostDetailPage  /> }
            />
           
        </AppStyle>
    )
}
const AppStyle = styled.div`
overflow-y: scroll;
height: 100vh;
`
export default HomePage


