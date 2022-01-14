import React from 'react'
import styled from 'styled-components'
import { UserType } from '../../type/userType'
import { FollowingsType } from "../../type/folloingType";
import Navigation from '../navbar/Navigation'
import FollowersSuggestion from './FollowersSuggestion'
import NewsFeedPage from '../../page/post/NewsFeedPage'

interface Props {
    logout: () => void,
    user: UserType,
    following: FollowingsType[],
    handleFollow: (currentUser: string, userFollow: string) => void,
    newsFeed: any
}

function Home(props: Props) {
    const { logout, user, following, handleFollow, newsFeed } = props

    return (
        <div >
            <Navigation logout={logout} user={user} />
            <Content className="container d-flex">
                <div className="col-sm-8 mr-3 mt-4">
                    <NewsFeedPage user={user} newsFeed={newsFeed} />
                </div>
                <FixedSuggestion className="pt-2 col-sm-4">
                    <FollowersSuggestion user={user} following={following} handleFollow={handleFollow} />
                </FixedSuggestion>
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
