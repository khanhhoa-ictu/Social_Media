import React from 'react'
import { Input } from 'reactstrap'
import styled from 'styled-components'
import { format } from 'timeago.js'
import { CurrentChat } from '../../type/commentType'
import { UserType } from '../../type/userType'
import avatar from './../../assets/image/no-avatar.png'
interface Props {
    message: CurrentChat,
    own: boolean,
    showInbox: UserType,
    user: UserType,
}
const DirectMessage = (props: Props) => {
    const { message, own, showInbox, user } = props
    console.log(message);
    return (

        <div >

            <div className="recent-inbox">
                {
                    own 
                    ?   <div className="d-flex align-items-end p-3 flex-column">
                            <div className="d-flex">
                                {user.profilePicture === ''
                                    ? <MainAvatar src={avatar} />
                                    : <MainAvatar src={user.profilePicture} />}
                                <ChatLine className="mx-3 mb-0 px-3 py-1 border">{message.text}</ChatLine>
                            </div>
                            <TimeStyle className="d-block text-muted span-time my-1 pb-1">{format(message.createdAt)}</TimeStyle>
                        </div>
                        : <div className="d-flex p-3 flex-column">
                            <div className="d-flex">
                                {showInbox.profilePicture === ''
                                    ? <MainAvatar src={avatar} />
                                    : <MainAvatar src={showInbox.profilePicture} />

                                }
                                <ChatLine className="mx-3 mb-0 px-3 py-1 border">{message.text}</ChatLine>
                            </div>

                            <TimeStyle className="d-block text-muted span-time my-1 pb-1">{format(message.createdAt)}</TimeStyle>

                        </div>
                }



            </div>

        </div>

    )
}
const TimeStyle = styled.span`
    font-size:11px;

`
const MainAvatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`

const ChatLine = styled.p`
    border-radius: 20px; 
`




export default DirectMessage
