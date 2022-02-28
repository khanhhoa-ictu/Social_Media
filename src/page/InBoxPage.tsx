import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'reactstrap'
import { io } from 'socket.io-client'
import styled from 'styled-components'
import { getConversations } from '../api/conversation.api'
import { createMessages, getMessages } from '../api/message.api'
import { getUser } from '../api/user.api'
import { getEmail } from '../config/locastorga.config'
import { RootState } from '../reducer'
import { CurrentChat, NewCommentType } from '../type/commentType'
import { ConversationType } from '../type/conversationType'
import { UserType } from '../type/userType'
import { loginFail, setUser } from './../action/user.action'
import avatar from './../assets/image/no-avatar.png'
import BlankMessage from './../conponents/inbox/BlankMessage'
import DirectMessage from './../conponents/inbox/DirectMessage'
import RecentMessages from './../conponents/inbox/RecentMessages'
import Navigation from './../conponents/navbar/Navigation'

const InboxPage = () => {
    const [conversations, setConversations] = useState<ConversationType[]>([]);
    const dispatch = useDispatch()
    const [showInbox, setShowInbox] = useState<UserType>();
    const [currentChat, setCurrentChat] = useState<ConversationType>();
    const [messages, setMessages] = useState<CurrentChat[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState<any>();
    const scrollRef = useRef<HTMLDivElement>(null);
    const socket = useRef<any>();
    let user = useSelector((state: RootState) => state.UserReducer.user.user)
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data: any) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);
    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current?.emit("addUser", user._id);
    }, [user]);
    useEffect(() => {
        if (user._id !== '') {
            getConversations(user._id).then((data) => {
                setConversations(data)
            })
        }
    }, [user._id]);

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
        if (currentChat?._id) {
            getMessages(currentChat?._id).then((data: CurrentChat[]) => {
                setMessages(data)
            })
        }

    }, [currentChat]);


    const handleSubmit = () => {
        if (currentChat?._id && newMessage !== '') {
            const message: NewCommentType = {
                sender: user._id,
                text: newMessage,
                conversationId: currentChat?._id
            }
            const receiverId = currentChat?.members.find(
                (member) => member !== user._id
            );
            socket.current?.emit("sendMessage", {
                senderId: user._id,
                receiverId,
                text: newMessage,
            });

            createMessages(message).then((data: CurrentChat) => {
                setMessages([...messages, data])
                setNewMessage('')
            })
        }

    }
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(loginFail())
    }




    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    return (
        <div>
            {
                user._id !== '' &&
                <DivStyled>
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
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                {
                                    currentChat
                                        ?
                                        <div className="col-12">
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
                                                    <div className="overflow-auto">
                                                        {messages.map((m, index) => (
                                                            <div key={index} ref={scrollRef}>
                                                                {showInbox && <DirectMessage
                                                                    message={m}
                                                                    own={m.sender === user._id}
                                                                    showInbox={showInbox}
                                                                    user={user}
                                                                />}
                                                            </div>
                                                        ))}
                                                    </div>

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
                                                </div >
                                            </div>
                                        </div >
                                        :
                                        <div className="px-sm-0 px-4">
                                            <BlankMessage />
                                        </div>
                                }
                            </div >

                        </BorderDiv >
                    </div >
                </DivStyled >
            }
        </div >

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
