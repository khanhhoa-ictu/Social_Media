import React, { useMemo } from "react";
import styled from "styled-components";
import { UserType } from "../../type/userType";
import { FollowingsType } from "../../type/folloingType";
import Navigation from "./../../conponents/navbar/Navigation";
import FollowersSuggestion from "./../../conponents/FollowersSuggestion";
import { PostType } from "../../type/postType";
import { NavLink } from "react-router-dom";
import { isEmpty } from "lodash";
import NewsFeed from "../../conponents/NewFeed";
import { getCommentByIDPost, submitComment } from "../../api/comment.api";
import { CommentType } from "../../type/commentType";
import { setComment } from "../../action/post.action";
import { useDispatch } from "react-redux";

interface Props {
  logout: () => void;
  user: UserType;
  following: FollowingsType[];
  handleFollow: (currentUser: string, userFollow: string) => void;
  newsFeed: PostType[];
  socket: any;
}

function HomeComponent(props: Props) {
  const { logout, user, following, handleFollow, newsFeed, socket } = props;
  const dispatch = useDispatch();

  const CommentPost = (
    profilePicture: string,
    userId: string,
    name: string,
    comment: string,
    postID: string
  ) => {
    submitComment(profilePicture, userId, name, comment, postID).then(
      (response: { msg: string }) => {
        if (response) {
          getCommentByIDPost(postID).then((data: { data: CommentType[] }) => {
            dispatch(setComment(data));
          });
        }
      }
    );
  };

  return (
    <div>
      <Navigation logout={logout} user={user} socket={socket} />
      <Content className="container pt-2 d-flex justify-content-md-between justify-content-center">
        <div className="col-md-8 col-10 col-sm-10 mt-4 d-flex justify-content-center">
          <NewsFeed
            CommentPost={CommentPost}
            newsFeed={newsFeed}
            user={user}
            socket={socket}
          />
        </div>
        {
          <FixedSuggestion className="col-xl-4 d-md-block d-none">
            {!isEmpty(following) && (
              <FollowersSuggestion
                user={user}
                following={following}
                handleFollow={handleFollow}
              />
            )}
          </FixedSuggestion>
        }
      </Content>
    </div>
  );
}

const FixedSuggestion = styled.div`
  width: 293px !important;
`;
const Content = styled.div`
  // margin-top: 58px !important;
`;
const UserLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #212529;
  font-size: 14px;
  &:hover {
    color: #212529;
  }
`;

export default HomeComponent;
