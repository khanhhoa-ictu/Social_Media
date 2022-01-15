import React, { useState } from 'react'
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
    console.log(following);
    const [suggestion, setSuggestion] = useState(following)
    const handleFollowing = (id: string, user: string, userFollow: string) => {
        const index: number = suggestion.findIndex((item: UserSuggestion) => item._id === id)
        const newData = [...suggestion];
        newData.splice(index, 1);
        setSuggestion(newData);
        handleFollow(user, userFollow);
    }
    return (
        <RightSide className="mx-3 px-1">
            <div className="py-4 d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center col-8">
                    {
                        user.profilePicture === ''
                            ? <MainAvatar src={avatar} />
                            : <MainAvatar src={user.profilePicture} />
                    }

                    <div className="px-3">
                        <NameText className="h6 mb-0 font-14">{user.name}</NameText>
                    </div>
                </div>
                <ButtonStyled className='text-primary font-14 col-3'>Chuyển</ButtonStyled>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p className="h6 text-muted font-14 mt-1">Gợi ý cho bạn</p>
                <ButtonStyled className="text-dark h6">Xem tất cả</ButtonStyled>
            </div>
            <div>
                {
                    suggestion?.map((item: any, key: number) => {
                        return <div className="py-2 d-flex justify-content-between align-items-center " key={key}>
                            <div className="d-flex align-items-center">
                                {
                                    item.profilePicture === ''
                                        ? <SubAvatar src={avatar} />
                                        : <SubAvatar src={item.profilePicture} />
                                }
                                <div className="px-3">
                                    <p className="h6 mb-0">{item.name}</p>
                                </div>
                            </div>
                            <ButtonStyled className='text-primary' onClick={() => handleFollowing(item._id, user.name, item.name)}>Theo dõi</ButtonStyled>
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

const RightSide = styled.div`
    position: fixed;
    width: 293px !important;
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
