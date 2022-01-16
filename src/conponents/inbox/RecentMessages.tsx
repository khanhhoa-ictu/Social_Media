import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUserID } from '../../api/user.api';
import { ConversationType } from '../../type/conversationType'
import { UserType } from '../../type/userType';
import avatar from './../../assets/image/no-avatar.png'
interface Props {
    setShowInbox: (showIndex: UserType) => void;
    conversation:ConversationType,
    currentUser:UserType,
}

const RecentMessages = (props: Props) => {
    const { setShowInbox,conversation ,currentUser} = props
    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        if(friendId){
            getUserID(friendId).then((user: UserType) =>{
                setUser(user);
            })
        }
      }, [user?._id]);
      const setShowUserInbox = () =>{
          if(user){
            setShowInbox(user)
          }
      }
    return (
        <div className="">
            <div className="recent-inbox">
                <div
                    className="d-flex align-items-center p-3 hover cursor-pointer"
                    onClick={setShowUserInbox}
                >
                    {
                        user?.profilePicture !=='' 
                        ?  <MainAvatar src={user?.profilePicture} />
                        :  <MainAvatar src={avatar} />
                    }
                   
                    <div className="px-3">
                        <p className="h6 mb-0">{user?.name}</p>
                        <p className="text-muted mb-0 font-14">Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const MainAvatar = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
`



export default RecentMessages
