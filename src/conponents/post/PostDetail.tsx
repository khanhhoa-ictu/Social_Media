import React, { ChangeEvent, useRef, useState } from 'react'
import { CardImg, CardTitle, Input, Modal, ModalBody, ModalHeader } from 'reactstrap'
import styled from 'styled-components';

interface PostDetailProps {
    showDetailPost: boolean;
    setShowDetailPost: (showDetailPost: boolean) => void;
}

const PostDetail = (props: PostDetailProps) => {

    const { showDetailPost, setShowDetailPost } = props;

    const setShowModal = () => {
        setShowDetailPost(!showDetailPost)
    }

    return (
        <ModalStyled
            isOpen={showDetailPost}
            toggle={setShowModal}
            centered
            className='modal border-none'
        >
            <div className="d-flex flex-row">
                <ModalBody className="col-7 p-0 border-end text-center">
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/256/186"
                        width="100%"
                        height="100%"
                    />
                </ModalBody>
                <ModalBody className="col-5 p-0">
                    <div className="border-bottom p-3">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <AvatarStyled src="https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg" alt="avatar" />
                                <div className='mx-3'>
                                    <TitleStyled className='mb-0' tag="h6">
                                        account
                                    </TitleStyled>
                                    <TitleStyled className="text-muted mb-0" >
                                        address
                                    </TitleStyled>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="d-block d-flex align-items-center px-3">
                        <ButtonSvg aria-label="Biểu tượng cảm xúc" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                        </ButtonSvg>
                        <CommentInput type="text" placeholder="Thêm bình luận ..." />
                        <ButtonPostStyled className='text-primary px-1'>Đăng</ButtonPostStyled>
                    </span>

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
        border-radius: 15px;
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

const ImgStyled = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
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
