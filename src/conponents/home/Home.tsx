import React from 'react'
import Navigation from '../navbar/Navigation'
import FollowersSuggestion from './FollowersSuggestion'
import NewFeed from './NewFeed'

function Home() {
    return (
        <div>
            <Navigation />
            <div className="container w-75 d-flex mt-4">
                <div className="col-sm-8 mr-3">
                    <NewFeed />
                </div>
                <div className="col-sm-4">
                    <FollowersSuggestion />
                </div>
            </div>
        </div>
    )
}

export default Home
