import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FollowingsType } from '../../type/folloingType'
import { UserSuggestion, UserType } from '../../type/userType'
import avatar from './../../assets/image/no-avatar.png'
interface Props {
    user: UserType,
    following: FollowingsType[],
    handleFollow: (currentUser: string, userFollow: string) => void
}
const FollowersSuggestion = (props: Props) => {
    const { user, following, handleFollow } = props
    const [suggestion, setSuggestion] = useState(following)
    const handleFollowing = (id: string, user: string, userFollow: string) => {
        const index: number = suggestion.findIndex((item: UserSuggestion) => item._id === id)
        const newData = [...suggestion];
        newData.splice(index, 1);
        setSuggestion(newData);
        handleFollow(user, userFollow);
    }
    return (
        <RightSide className="ps-md-4">
            <div className="py-4 d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center">
                    {
                        user.profilePicture === ''
                            ? <MainAvatar src={avatar} />
                            : <MainAvatar src={user.profilePicture} />
                    }

                    <UserLinkStyle className="px-3" to={`/${user._id}`}>
                        <NameText className="h6 mb-0 font-14">{user.name}</NameText>
                    </UserLinkStyle>
                </div>
                <p className='text-primary text-end font-14 cursor-pointer mb-0 px-2'>Chuyển</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p className="h6 text-muted font-14">Gợi ý cho bạn</p>
                <p className="text-dark h6 font-14 px-2">Xem tất cả</p>
            </div>
            <div>
                {
                    suggestion.map((item: FollowingsType, key: number) => {
                        return <div className="py-2 d-flex justify-content-between align-items-center " key={key}>
                            <div className="d-flex align-items-center">
                                {
                                    item.profilePicture === ''
                                        ? <SubAvatar src={avatar} />
                                        : <SubAvatar src={item.profilePicture} />
                                }
                                <UserLinkStyle className="px-3" to={`/${item._id}`}>
                                    <p className="h6 mb-0 font-14">{item.name}</p>
                                </UserLinkStyle>
                            </div>
                            <ButtonStyled
                                className='text-primary'
                                onClick={() => handleFollowing(item._id, user.name, item.name)}
                            >
                                Theo dõi
                            </ButtonStyled>
                        </div>
                    })
                }
            </div>
            <CopyrightStyled className='my-3'>
                &copy; 2022 MARGASTNI FROM UNIVERSE
            </CopyrightStyled>
        </RightSide>
    )
}
const UserLinkStyle = styled(NavLink)`
    text-decoration: none;
    color:#212529;
    font-size: 14px;
    &:hover{
        color:#212529
    }
`

const RightSide = styled.div`
    position: fixed;
    @media (min-width: 992px) {
        width: 293px;
    }
`

const CopyrightStyled = styled.p`
    color: #c7c7c7;
    font-size: 12px !important;
`

const MainAvatar = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
`

const NameText = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 130px;
`

const SubAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`

const ButtonStyled = styled.button`
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 13px;
`

export default FollowersSuggestion
