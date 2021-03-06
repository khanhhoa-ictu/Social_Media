import React, { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, Input } from 'reactstrap';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { PostType } from '../../type/postType';
import { UserType } from '../../type/userType';
import avatar from './../../assets/image/no-avatar.png';
interface Props {
    liked: boolean,
    postContent: string,
    setLiked: (text: boolean) => void,
    handleLikePost: () => void,
    post: PostType,
    user: UserType,
    userPost: UserType | undefined,
    CommentPost: (profilePicture: string, userId: string, name: string, comment: string, postID: string) => void,
}

const PostNoSetting = (props: Props) => {
    const {
        liked,
        handleLikePost,
        post,
        user,
        userPost,
        CommentPost
    } = props
    const [likePost, setLikePost] = useState(post.likes.length)
    const changeLikePost = () => {
        handleLikePost()
        setLikePost(liked ? likePost - 1 : likePost + 1)
    }
    const [comment, setComment] = useState('')
    const [commentByPost, setCommentByPost] = useState(post.comments)
    const submitCommentPost = () => {
        if (comment !== '') {
            let dataComment = [...commentByPost]
            let mycomment = {
                profilePicture: user.profilePicture,
                id_user: user._id,
                id_post: post._id,
                name: user.name,
                comment: comment,
            }
            dataComment.push(mycomment)
            CommentPost(user.profilePicture, user._id, user.name, comment, post._id)
            setComment('')
            setCommentByPost(dataComment)
        }

    }
    const [visible, setVisible] = useState(3);
    const [sumComment, setSumComment] = useState(() => {
        const initSumComment = post.comments.length - visible;
        return initSumComment;
    })

    const handleSumComment = () => {
        setVisible(visible + 4);
        setSumComment(post.comments.length - (visible + 4))
    }
    return (
        <Card className="mb-4">
            <CardBody className='p-0'>
                <div className="p-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            {
                                userPost?.profilePicture === ''
                                    ? <AvatarStyled src={avatar} alt="avatar" />
                                    : <AvatarStyled src={userPost?.profilePicture} alt="avatar" />

                            }
                            <div className='mx-3'>
                                <UserLinkStyle className='mb-0 h6' to={`/${post.userId}`}>
                                    {userPost?.name}
                                </UserLinkStyle>
                                <TitleStyled className="text-muted mb-0 font-14" >
                                    {userPost?.address}
                                </TitleStyled>
                            </div>
                        </div>
                    </div>
                </div>
                <ImagePost >
                    <CardImg
                        alt="Card image cap"
                        src={post.img}
                        className='img-post'
                    />
                </ImagePost>

            </CardBody>
            <TitleStyled className="pt-3">
                <div className="px-3">
                    <span className="d-flex justify-content-between mb-2">
                        <span>
                            <span onClick={changeLikePost}>
                                {liked ?
                                    <ButtonSvg aria-label="B??? th??ch" className="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24">
                                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                    </ButtonSvg>
                                    :
                                    <ButtonSvg aria-label="Th??ch" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                                    </ButtonSvg>
                                }
                            </span>
                            <NavLink to={`/post/${post._id}`} >
                                <ButtonSvg aria-label="B??nh lu???n" className="_8-yf5 mx-3" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                                </ButtonSvg>
                            </NavLink>

                            <ButtonSvg aria-label="Chia s??? b??i vi???t" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                            </ButtonSvg>
                        </span>
                        <ButtonSvg aria-label="L??u" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                        </ButtonSvg>
                    </span>
                    <span className="d-block">
                        <span className="h6 font-14">{likePost} ng?????i th??ch</span>
                    </span>
                    <div className="comment mb-2 font-14">
                        <span className="h6 font-14">{post.name}: </span> {post.desc}
                    </div>
                    {
                        sumComment <= 0
                            ? null
                            : <span className="d-block text-muted" onClick={handleSumComment}>Xem t???t c??? {sumComment} b??nh lu???n</span>
                    }

                    {
                        commentByPost.slice(0, visible).map((comment, key) => {
                            return <div className="comment mb-1" key={key}>
                                <span className="h6">{comment.name} </span> {comment.comment}
                            </div>
                        })
                    }

                    <span className="d-block text-muted span-time my-1 pb-1">{format(post.createdAt)}</span>
                </div>
                <hr className="my-2" />
                <span className="d-block d-flex align-items-center px-3">
                    <ButtonSvg aria-label="Bi???u t?????ng c???m x??c" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                    </ButtonSvg>
                    <CommentInput
                        value={comment}
                        className="font-14"
                        type="text"
                        placeholder="Th??m b??nh lu???n ..."
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
                    />
                    <ButtonPostStyled
                        className='text-primary px-1 font-14'
                        onClick={submitCommentPost}
                    >
                        ????ng
                    </ButtonPostStyled>
                </span>
            </TitleStyled>
        </Card>
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

const AvatarStyled = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
`
const ImagePost = styled.div`
    max-height: 700px;
    overflow: hidden;
`
const TitleStyled = styled(CardTitle)`
    .text-muted{
        cursor: pointer;
    }
    .span-time{
        font-size: 10.5px !important;
    }
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

export default PostNoSetting
