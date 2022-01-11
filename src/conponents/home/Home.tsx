import React from 'react'
import styled from 'styled-components'
import Navigation from '../navbar/Navigation'
import FollowersSuggestion from './FollowersSuggestion'
import NewFeed from './NewFeed'

interface Props {
    logout : () => void
}

function Home(props : Props) {
    const {logout} = props

    return (
        <div>
            <Navigation logout = {logout} />
            <Content className="container d-flex mt-3">
                <div className="col-sm-8 mr-3 mt-4">

                    <NewFeed />
                </div>
                <FixedSuggestion className="pt-2">
                    <FollowersSuggestion />
                </FixedSuggestion>
            </Content>

        </div>
    )
}

const FixedSuggestion = styled.div`
    width: 293px !important;
`

const Content = styled.div`
    margin-top: 58px !important;
`

export default Home
