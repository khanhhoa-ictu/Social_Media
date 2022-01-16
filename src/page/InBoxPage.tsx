import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { auth, loginFail, setUser } from './../action/user.action'
import Navigation from './../conponents/navbar/Navigation'
import BlankMessage from './../conponents/inbox/BlankMessage'
import DirectMessage from './../conponents/inbox/DirectMessage'
import RecentMessages from './../conponents/inbox/RecentMessages'
import avatar from './../assets/image/no-avatar.png'
import { getEmail } from '../config/locastorga.config'
import { getUser } from '../api/user.api'
import { RootState } from '../reducer'
import { getConversations } from '../api/conversation.api'
import { ConversationType } from '../type/conversationType'
import { createMessages, getMessages } from '../api/message.api'
import { Input } from 'reactstrap'
import { CurrentChat, NewCommentType } from '../type/commentType'
import { UserType } from '../type/userType'

const InboxPage = () => {
    const [conversations, setConversations] = useState<ConversationType[]>([]);
    const dispatch = useDispatch()
    const [showInbox, setShowInbox] = useState<UserType>();
    const [currentChat, setCurrentChat] = useState<ConversationType>();
    const [messages, setMessages] = useState<CurrentChat[]>([]);
    const [newMessage, setNewMessage] = useState("");

    let user = useSelector((state: RootState) => state.UserReducer.user.user)
    const handleSubmit = () => {
        if (currentChat?._id) {
            const message: NewCommentType = {
                sender: user._id,
                text: newMessage,
                conversationId: currentChat?._id
            }
            createMessages(message).then((data) => {
                console.log(data);
            })
        }

    }
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }
    useEffect(() => {
        let email
        if (getEmail() !== null) {
            email = getEmail().email;
        }
        getUser(email).then(user => {
            dispatch(setUser(user))
        })
    }, [])
    useEffect(() => {
        if (user._id !== '') {
            getConversations(user._id).then((data) => {
                console.log(data);
                setConversations(data)
            })
        }
    }, [user._id]);
    useEffect(() => {
        if (currentChat?._id) {
            getMessages(currentChat?._id).then((data: CurrentChat[]) => {
                setMessages(data)
            })
        }

    }, [currentChat]);

    return (
        <div>
            {user._id !== '' && <DivStyled>
                <Navigation logout={logout} user={user} />
                <br />
                <div className="container">
                    <BorderDiv className="d-flex border rounded">
                        <div className="col-4 border-end">
                            <div className="text-center py-3 w-100 border-bottom">
                                <SpanStyled className="h6">account </SpanStyled>
                            </div>
                            {conversations.map((c, key) => (
                                <div key={key} onClick={() => setCurrentChat(c)} >
                                    <RecentMessages
                                        setShowInbox={setShowInbox}
                                        conversation={c}
                                        currentUser={user}
                                    />
                                    {/* <Conversation conversation={c} currentUser={user} /> */}
                                </div>
                            ))}


                        </div>
                        {
                            currentChat
                                ? <div className="col-8">
                                    <div className="h-100">

                                        <div className="d-flex h-100 justify-content-end flex-column pb-4">
                                            <div className="p-3 w-100 border-bottom">
                                                {
                                                    showInbox?.profilePicture === ''
                                                        ? <MainAvatar src={avatar} />
                                                        : <MainAvatar src={showInbox?.profilePicture} />

                                                }

                                                <span className="h6 mx-3">{showInbox?.name} </span>
                                            </div>
                                            {messages.map((m, index) => (
                                                <div key={index} >
                                                    {showInbox && <DirectMessage
                                                        message={m}
                                                        own={m.sender === user._id}
                                                        showInbox={showInbox}
                                                        user={user}
                                                    />}
                                                </div>
                                            ))}
                                            <BoxInput className="mt-auto d-flex align-items-center mx-4 border">
                                                <ButtonSvg aria-label="Biểu tượng cảm xúc" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                                                </ButtonSvg>
                                                <CommentInput
                                                    type="text"
                                                    className="shadow-none font-14"
                                                    placeholder="Nhắn tin ..."
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
                                                    value={newMessage}
                                                />
                                                <ButtonPostStyled className='text-primary px-1 font-14' onClick={handleSubmit}>Gửi</ButtonPostStyled>
                                            </BoxInput>
                                        </div>
                                    </div>
                                </div>
                                : <BlankMessage />
                        }


                    </BorderDiv>
                </div>
            </DivStyled>
            }
        </div>

    )
}

const DivStyled = styled.div`
`
const MainAvatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`

const BorderDiv = styled.div`
    height: 85vh;
`
const SpanStyled = styled.span`
    line-height: 28px;
`
const ButtonSvg = styled.svg`
    cursor: pointer;
`

const ButtonPostStyled = styled.button`
    background-color: transparent;
    border: none;
`

const CommentInput = styled(Input)`
    border: none;
    outline: none;
`

const BoxInput = styled.div`
    padding: 5px 15px;
    border-radius: 28px;
`
export default InboxPage
