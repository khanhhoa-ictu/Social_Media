import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { auth, loginFail } from '../../action/user.action'
import Navigation from '../navbar/Navigation'
import DirectMessage from './DirectMessage'
import RecentMessages from './RecentMessages'

const InboxPage = () => {

    const dispatch = useDispatch()

    let user = useSelector((state: any) => state.UserReducer.user.state)

    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }

    return (
        <DivStyled>
            <Navigation logout={logout} user={user} />
            <div className="container d-flex border mt-5">
                <div className="col-4">
                    <RecentMessages />
                </div>
                <div className="col-8">
                    <DirectMessage />
                </div>
            </div>
        </DivStyled>
    )
}

const DivStyled = styled.div`
    margin-top: 80px;
`

export default InboxPage
