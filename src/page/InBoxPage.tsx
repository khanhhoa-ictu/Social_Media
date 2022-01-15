import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loginFail } from './../action/user.action'
import Navigation from './../conponents/navbar/Navigation'
import BlankMessage from './../conponents/inbox/BlankMessage'
import DirectMessage from './../conponents/inbox/DirectMessage'
import RecentMessages from './../conponents/inbox/RecentMessages'
import { RootState } from '../reducer'

const InboxPage = () => {

    const dispatch = useDispatch()
    const [showInbox, setShowInbox] = useState(false);

    let user = useSelector((state: RootState) => state.UserReducer.user.user)

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
