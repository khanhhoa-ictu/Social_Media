import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useHistory, useParams } from "react-router-dom";
import { loginFail, setUser } from "../../action/user.action";
import {
  getFollower,
  getFollowing,
  getPostUser,
  getUser,
} from "../../api/user.api";
import { getEmail } from "../../config/locastorga.config";
import ModalFollowing from "../../conponents/account-setting/ModalFollowing";
import Navigation from "../../conponents/navbar/Navigation";
import ContentProfile from "./ContentProfile";
import HeaderProfile from "./HeaderProfile";
import { RootState } from "../../reducer";
import { PostType } from "../../type/postType";
import { UserType } from "../../type/userType";
import PostDetailPage from "./../../conponents/PostDetail";
import { FollowingsType } from "../../type/folloingType";
import ModalFollow from "../../conponents/Modal/ModalFollow";
import styled from "styled-components";
import { Modal } from "reactstrap";
import avatar from "./../../assets/image/no-avatar.png";

interface RouteParams {
  id: string;
}

function ProfileUser() {
  let { id } = useParams<RouteParams>();
  let history = useHistory();
  const dispatch = useDispatch();
  let [userProfile, setUserProfile] = useState<UserType>();
  let [post, setPost] = useState<PostType[]>();
  let user = useSelector((state: RootState) => state.UserReducer.user.user);
  const [follower, setFollower] = useState<FollowingsType[]>([]);
  const [following, setFollowing] = useState<FollowingsType[]>([]);

  useEffect(() => {
    getFollower(id).then((data) => {
      setFollower(data);
    });
    getFollowing(id).then((data) => {
      setFollowing(data);
    });
  }, [id]);

  useEffect(() => {
    getPostUser(id)
      .then((data) => {
        setUserProfile(data.user);
        setPost(data.post);
        let email;
        if (getEmail() !== null) {
          email = getEmail().email;
        }
        getUser(email).then((user) => {
          dispatch(setUser(user));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(loginFail());
  };
  return (
    <div>
      {userProfile && post && user._id && (
        <div>
          <Navigation logout={logout} user={user} />
          <div className="container">
            <HeaderProfile userProfile={userProfile} post={post} user={user} />
            <ContentProfile post={post} />
          </div>
        </div>
      )}
      <Route
        exact
        path="/profile/:id"
        render={() => user && <PostDetailPage user={user} />}
      />
      <Route
        exact
        path="/:id/follower"
        render={() =>
          user && (
            <ModalFollow
              id={id}
              toggle={() => history.goBack()}
              title="Người theo dõi"
              children={follower?.map((item: FollowingsType, key: number) => {
                return (
                  <div
                    className="px-3 d-flex align-items-center"
                    key={item._id}
                  >
                    <NavLinkHover
                      className="text-decoration-none font-14 text-dark d-flex align-items-center w-100 px-3 py-2"
                      to={`/${item._id}`}
                    >
                      <AvatarStyled
                        src={
                          item?.profilePicture ? item.profilePicture : avatar
                        }
                        alt="avatar"
                      />
                      <div className="ms-5">
                        <span>{item?.name}</span>
                      </div>
                    </NavLinkHover>
                  </div>
                );
              })}
            />
          )
        }
      />

      <Route
        exact
        path="/:id/following"
        render={() =>
          user && (
            <ModalFollow
              id={id}
              toggle={() => history.goBack()}
              title="Người đang theo dõi"
              children={following?.map((item: FollowingsType, key: number) => {
                return (
                  <div className="px-3 d-flex align-items-center" key={key}>
                    <NavLinkHover
                      className="text-decoration-none font-14 text-dark d-flex align-items-center w-100 px-3 py-2"
                      to={`/${item._id}`}
                    >
                      <AvatarStyled
                        src={
                          item?.profilePicture ? item.profilePicture : avatar
                        }
                        alt="avatar"
                      />
                      <div className="ms-5">
                        <span>{item?.name}</span>
                      </div>
                    </NavLinkHover>
                  </div>
                );
              })}
            />
          )
        }
      />
    </div>
  );
}

const NavLinkHover = styled(NavLink)``;
const ModalStyled = styled(Modal)`
  width: 300px;
  height: 350px;
  max-width: none !important;
  .modal-body {
    height: 350px;

    img {
      object-fit: cover;
    }
  }
  .modal-content {
    border: none;
    .modal-header > .modal-title {
      font-size: 16px;
    }
  }
  .modal-backdrop.show {
    opacity: 0.85;
  }
  .title {
    border-bottom: 1px solid rgba(219, 219, 219, 1);
  }
  a {
    color: #212529;
    text-decoration: none;
  }
`;
const AvatarStyled = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
`;
export default ProfileUser;
