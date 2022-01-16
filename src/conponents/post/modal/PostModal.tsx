import React, { ChangeEvent, RefObject, useEffect, useState } from 'react'
import { CardTitle, Modal, ModalBody, ModalHeader } from 'reactstrap'
import styled from 'styled-components'
import avatar from '../../../assets/image/no-avatar.png'
import { PostType } from '../../../type/postType'
import { UserType } from '../../../type/userType'

interface ModalProps {
    show: boolean;
    title: string;
    inputRef: RefObject<HTMLInputElement>;
    post: PostType | undefined;
    userPost: UserType | undefined;
    postContent: string,
    handleUpload: () => void;
    setShowModal: () => void;
    handleDisplayFileDetails: () => void;
    handleUpdatePost: () => void,
    setPostContent: (text: string) => void,
}

const PostModal = (props: ModalProps) => {

    const {
        show,
        inputRef,
        title,
        post,
        userPost,
        postContent,
        handleUpload,
        setShowModal,
        setPostContent,
        handleUpdatePost,
        handleDisplayFileDetails } = props

    const [preview, setPreview] = useState('')

    const showPreview = () => {
        if (inputRef.current?.files && (inputRef.current.files?.length !== 0)) {
            setPreview(URL.createObjectURL(inputRef.current.files[0]))
        }
    }


    return (
        <ModalStyled
            isOpen={show}
            toggle={setShowModal}
            centered
            className='modal border-none mx-auto'
        >
            <ModalHeader toggle={setShowModal} className=''>
                {title}
            </ModalHeader>
            <div className="d-flex flex-md-row flex-sm-column-reverse flex-column-reverse">
                <ModalBody className="col-7 border-end text-center">
                    Nhập ảnh từ thiết bị &nbsp;
                    <input
                        className="d-none"
                        type="file"
                        name='input'
                        ref={inputRef}
                        onChange={() => {
                            handleDisplayFileDetails();
                            showPreview();
                        }}
                    />
                    <ButtonPostStyled
                        onClick={handleUpload}
                        className="text-primary py-1 my-2"
                    >
                        Tải lên
                    </ButtonPostStyled>
                    {
                        title === 'Chỉnh sửa bài viết' &&
                        post?.img &&
                        <div className="my-1">
                            <ImgStyled className='img-thumbnail' src={preview ? preview : post?.img} alt="temp" />
                        </div>
                    }
                    {
                        title === 'Tạo bài viết mới' &&
                        preview &&
                        <div className="my-1">
                            <ImgStyled className='img-thumbnail' src={preview} alt="temp" />
                        </div>
                    }
                </ModalBody>
                <ModalBody className="col-5">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            {userPost?.profilePicture === ''
                                ? <AvatarStyled src={avatar} alt="avatar" />
                                : <AvatarStyled src={userPost?.profilePicture} alt="avatar" />
                            }

                            <div className='mx-3'>
                                <TitleStyled className='mb-0' tag="h6">
                                    {userPost?.name}
                                </TitleStyled>
                                <TitleStyled className="text-muted mb-0" >
                                    {userPost?.address ? userPost.address + ', vn' : ''}
                                </TitleStyled>
                            </div>
                        </div>
                        <ButtonPostStyled
                            className='text-primary px-1'
                            onClick={handleUpdatePost}
                        >
                            Lưu
                        </ButtonPostStyled>
                    </div>
                    <ContentArea
                        className='d-block mt-4 font-14 form-control shadow-none'
                        name='caption'
                        value={postContent}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPostContent(e.target.value)}
                        placeholder='Chú thích bài viết...'
                        rows={5}
                    />
                    <svg aria-label="Biểu tượng cảm xúc" className="_8-yf5 mt-3 cursor-pointer d-none d-md-block" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                    </svg>
                </ModalBody>
            </div>
        </ModalStyled>
    )
}

const AvatarStyled = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
`

const TitleStyled = styled(CardTitle)`
    .text-muted{
        cursor: pointer;
    }
    .span-time{
        font-size: 10.5px !important;
    }
`

const ButtonPostStyled = styled.button`
    background-color: transparent;
    border: none;
`

const ContentArea = styled.textarea`
    border-radius: 4px;
    padding: 10px;
    resize: none;
`
const ModalStyled = styled(Modal)`
    width: 750px;
    height: 600px;
    max-width: none !important;   
    .modal-body{
        height: 535px;
    }
    .modal-dialog, .modal-content{
        height: 600px;
    }
    .modal-content{
        border-radius: 15px;
        border: none;
        .modal-header>.modal-title{
            font-size: 16px;
        }
    }
    .modal-backdrop.show{
        opacity: 0.85;
    }
    @media (max-width: 768px) {
        width: 90%;
        .modal-body{
            width: 100%;
            height: inherit;
        }
    }
`
const ImgStyled = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    @media (max-width: 768px) {
        max-width: 200px;
        height: 200px;
        object-fit: contain;
    }
`

export default PostModal
