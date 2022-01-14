
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardImg, CardTitle, Input, Modal, ModalBody } from 'reactstrap';
import avatar from './../../assets/image/no-avatar.png'
import styled from 'styled-components';
import { PostDetailType } from '../../type/postType';
import Comment from './Comment'
import { format } from 'timeago.js';
import { UserType } from '../../type/userType';

interface PostDetailProps {
    liked: boolean;
    user: UserType,
    setLiked: (liked: boolean) => void;
    handleLikePost: (IdPost: string) => void;
    id: string,
    postDetail: PostDetailType,
    CommentPost: (profilePicture: string, userId: string, name: string, comment: string, postID: string) => void,
}

const PostDetail = (props: PostDetailProps) => {
    const {
        liked,
        handleLikePost,
        id,
        user,
        postDetail,
        CommentPost,
    } = props;
    let history = useHistory();
    const [likePost, setLikePost] = useState(() => {
        return postDetail.post.likes.length;
    })
    const changeLikePost = () => {
        handleLikePost(postDetail.post._id)
        setLikePost(liked ? likePost - 1 : likePost + 1)
    }
    const [comment, setComment] = useState('')
    const [commentByPost, setCommentByPost] = useState(postDetail.post.comments)
    const submitCommentPost = () => {
        if (comment !== '') {
            let test = [...commentByPost]
            let mycomment = {
                profilePicture: user.profilePicture,
                id_user: user._id,
                id_post: postDetail.post._id,
                name: user.name,
                comment: comment,
            }
            test.push(mycomment)
            CommentPost(user.profilePicture, user._id, user.name, comment, postDetail.post._id)
            setComment('')
            setCommentByPost(test)
        }

    }

    return (
        <ModalStyled
            isOpen={!!id}
            toggle={() => history.push('/')}
            centered
            className='modal border-none'
        >
            <div className="d-flex flex-row">
                <ModalBody className="col-7 p-0 border-end text-center">
                    <CardImg
                        alt="Card image cap"
                        src={postDetail.post.img}
                        width="100%"
                        height="100%"
                    />
                </ModalBody>
                <ModalBody className="col-5 p-0 d-flex justify-content-between flex-column">
                    <div className="post">
                        <div className="border-bottom p-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    {
                                        postDetail.userPost.profilePicture === ''
                                            ? <AvatarStyled src={avatar} alt="avatar" />
                                            : <AvatarStyled src={postDetail.userPost.profilePicture} alt="avatar" />
                                    }

                                    <div className='mx-3'>
                                        <TitleStyled className='mb-0' tag="h6">
                                            {postDetail.userPost.name}
                                        </TitleStyled>
                                        <TitleStyled className="text-muted mb-0" >
                                            {postDetail.userPost.address}
                                        </TitleStyled>
                                    </div>
                                </div>
                                <p className="btn border-none p-0 text-primary">Theo dõi</p>
                            </div>
                        </div>
                        <div className='ms-3'>
                            <div className="d-flex align-items-center mt-2">
                                {
                                    postDetail.userPost.profilePicture === ''
                                        ? <AvatarStyled src={avatar} alt="avatar" />
                                        : <AvatarStyled src={postDetail.userPost.profilePicture} alt="avatar" />
                                }

                                <div className='mx-3 d-flex'>
                                    <TitleStyled className='mb-0' tag="h6">
                                        {postDetail.userPost.name}
                                    </TitleStyled>
                                    <TitleStyled className="text-muted mb-0 ms-2" >
                                        {postDetail.post.desc}
                                    </TitleStyled>
                                </div>
                            </div>

                            {
                                commentByPost.map((comment:any, key:number) => {
                                    return <Comment
                                        key={key}
                                        profilePicture={comment.profilePicture}
                                        name={comment.name}
                                        comment={comment.comment}
                                    />
                                })
                            }

                        </div>
                    </div>
                    <TitleStyled className="pt-3 border-top">
                        <div className="px-3">
                            <span className="d-flex justify-content-between mb-2">
                                <span>
                                    <span onClick={changeLikePost}>
                                        {liked ?
                                            <ButtonSvg aria-label="Bỏ thích" className="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24">
                                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                            </ButtonSvg>
                                            :
                                            <ButtonSvg aria-label="Thích" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                                            </ButtonSvg>
                                        }
                                    </span>
                                    <ButtonSvg aria-label="Bình luận" className="_8-yf5 mx-3" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                                    </ButtonSvg>
                                    <ButtonSvg aria-label="Chia sẻ bài viết" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                                    </ButtonSvg>
                                </span>
                                <ButtonSvg aria-label="Lưu" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                                </ButtonSvg>
                            </span>
                            <span className="d-block">
                                <span className="h6">{likePost} lượt thích</span>
                            </span>
                            <span className="d-block text-muted span-time my-1 pb-1">{format(postDetail.post.createdAt)}</span>
                        </div>
                        <hr className="my-2" />
                        <span className="d-block d-flex align-items-center px-3">
                            <ButtonSvg aria-label="Biểu tượng cảm xúc" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                            </ButtonSvg>
                            <CommentInput
                                type="text"
                                value={comment}
                                placeholder="Thêm bình luận ..."
                                onChange={(e: any) => setComment(e.target.value)}
                            />
                            <ButtonPostStyled className='text-primary px-1' onClick={submitCommentPost}>Đăng</ButtonPostStyled>
                        </span>
                    </TitleStyled>
                </ModalBody>
            </div>
        </ModalStyled>
    )
}

const ModalStyled = styled(Modal)`
    width: 1120px;
    height: 800px;
    max-width: none !important;   
    .modal-body{
        height: 600px;
        img{
            object-fit: cover;
        }
    }
    .modal-content{
        border: none;
        .modal-header>.modal-title{
            font-size: 16px;
        }
    }
    .modal-backdrop.show{
        opacity: 0.85;
    }
`
const AvatarStyled = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
`

const TitleStyled = styled(CardTitle)`
    font-size: 14px;
    span{
        font-size: 14px;
    }
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
    font-size: 14px;
`

const CommentInput = styled(Input)`
    border: none;
    outline: none;
    font-size: 14px;
`
export default PostDetail
