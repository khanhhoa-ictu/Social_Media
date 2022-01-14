import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { auth, loginFail } from './../action/user.action'
import Navigation from './../conponents/navbar/Navigation'
import BlankMessage from './../conponents/inbox/BlankMessage'
import DirectMessage from './../conponents/inbox/DirectMessage'
import RecentMessages from './../conponents/inbox/RecentMessages'

const InboxPage = () => {

    const dispatch = useDispatch()
    const [showInbox, setShowInbox] = useState(false);

    let user = useSelector((state: any) => state.UserReducer.user.state)

    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }

    return (
        <DivStyled>
            <Navigation logout={logout} user={user} />
            <br />
            <div className="container">
                <BorderDiv className="d-flex border rounded">
                    <div className="col-4 border-end">
                        <RecentMessages setShowInbox={setShowInbox} />
                    </div>
                    <div className="col-8">
                        {
                            showInbox ?
                                <DirectMessage />
                                :
                                <BlankMessage />
                        }
                    </div>
                </BorderDiv>
            </div>
        </DivStyled>
    )
}

const DivStyled = styled.div`
`

const BorderDiv = styled.div`
    height: 85vh;
`

export default InboxPage
