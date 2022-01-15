import React from 'react'
import styled from 'styled-components'
import { UserType } from '../../type/userType'
import { FollowingsType } from "../../type/folloingType";
import Navigation from '../navbar/Navigation'
import FollowersSuggestion from './FollowersSuggestion'
import NewsFeedPage from '../../page/post/NewsFeedPage'
import { PostType } from '../../type/postType';

interface Props {
    logout: () => void,
    user: UserType,
    following: FollowingsType[],
    handleFollow: (currentUser: string, userFollow: string) => void,
    newsFeed: PostType[],
}

function Home(props: Props) {
    const { logout, user, following, handleFollow, newsFeed } = props

    return (
        <div >
            <Navigation logout={logout} user={user} />
            <Content className="container pt-2 d-flex justify-content-md-between justify-content-center">
                <div className="col-md-8 col-10 col-sm-10 mt-4 d-flex justify-content-center">
                    <NewsFeedPage user={user} newsFeed={newsFeed} />
                </div>
                {
                    // following.length > 0 &&
                    <FixedSuggestion className="col-xl-4 d-md-block d-none">
                        <FollowersSuggestion user={user} following={following} handleFollow={handleFollow} />
                    </FixedSuggestion>
                }

            </Content>
        </div>
    )
}

const FixedSuggestion = styled.div`
    width: 293px !important;
`

const Content = styled.div`
    // margin-top: 58px !important;
`


export default Home
