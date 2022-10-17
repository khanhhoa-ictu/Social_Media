import React from "react";
import styled from "styled-components";
import { UserType } from "../../type/userType";
import { FollowingsType } from "../../type/folloingType";
import Navigation from "./../../conponents/navbar/Navigation";
import FollowersSuggestion from "./../../conponents/home/FollowersSuggestion";
import NewsFeedPage from "../../page/post/NewsFeedPage";
import { PostType } from "../../type/postType";
import { NavLink } from "react-router-dom";
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

  return (
    <div>
      <Navigation logout={logout} user={user} socket={socket} />
      <Content className="container pt-2 d-flex justify-content-md-between justify-content-center">
        <div className="col-md-8 col-10 col-sm-10 mt-4 d-flex justify-content-center">
          <NewsFeedPage user={user} newsFeed={newsFeed} socket={socket} />
        </div>
        {
          <FixedSuggestion className="col-xl-4 d-md-block d-none">
            {following.length > 0 && (
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
