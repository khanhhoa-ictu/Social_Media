import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { setFollowing } from "../../action/flow.action";
import { auth, loginFail, setUser } from "../../action/user.action";
import { getPostTimeline } from "../../api/post.api";
import { followUser, getFriendSuggestion, getUser } from "../../api/user.api";
import { getEmail } from "../../config/locastorga.config";
import Home from "./HomeComponent";
import { RootState } from "../../reducer";
import { PostType } from "../../type/postType";
import PostDetail from "./../../conponents/PostDetail";
import { io } from "socket.io-client";

function HomePage() {
  const dispatch = useDispatch();
  const socket = useRef<any>();
  const history = useHistory();

  let user = useSelector((state: RootState) => state.UserReducer.user.user);
  let following = useSelector(
    (state: RootState) => state.FollowingReducer.following.followings
  );
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket?.current.on("getNotification", (data: any) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    if (user._id !== "") {
      socket?.current.emit("addUser", user._id);
    }
  }, [socket, user]);

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(loginFail());
  };

  useEffect(() => {
    const Authentication = async () => {
      let res = await dispatch(auth());
      if (!res) {
        history.push("/login");
      }
    };
    Authentication();
  }, []);

  useEffect(() => {
    let email;
    if (getEmail() !== null) {
      email = getEmail().email;
    }
    getUser(email).then((user) => {
      dispatch(setUser(user));
    });
  }, []);
  useEffect(() => {
    if (user._id) {
      getFriendSuggestion(user._id).then((followings) => {
        dispatch(setFollowing(followings));
      });
    }
  }, [user]);

  const handleFollow = (currentUser: string, UserFollow: string) => {
    followUser(currentUser, UserFollow)
      .then((data: string) => {
        console.log("Following user success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [loading, setLoading] = useState(true);
  const [newsFeed, setNewFeed] = useState<PostType[]>([]);
  const [page, setPage] = useState(0);
  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (user._id) {
      const loadUsers = async () => {
        setLoading(true);
        getPostTimeline(user._id, page).then((data) => {
          const newData = newsFeed.concat(data);
          setNewFeed(newData);
          setLoading(false);
        });
      };
      loadUsers();
    }
  }, [page, user]);
  return (
    <AppStyle onScroll={handleScroll}>
      <Home
        socket={socket}
        logout={logout}
        user={user}
        following={following}
        handleFollow={handleFollow}
        newsFeed={newsFeed}
      />

      <Route exact path="/post/:id" render={() => <PostDetail user={user} />} />
    </AppStyle>
  );
}
const AppStyle = styled.div`
  overflow-y: scroll;
  height: 100vh;
`;
export default HomePage;
