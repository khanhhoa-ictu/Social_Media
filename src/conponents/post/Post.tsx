import React, { useState } from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import styled from 'styled-components'

const Post = () => {

    const [liked, setLiked] = useState<boolean>(false);

    return (
        <Card className="mb-4">
            <CardBody className='p-0'>
                <div className="p-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <AvatarStyled src="https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg" alt="avatar" />
                            <div className='mx-3'>
                                <TitleStyled className='mb-0' tag="h6">
                                    account
                                </TitleStyled>
                                <TitleStyled className="text-muted mb-0" >
                                    address / song
                                </TitleStyled>
                            </div>
                        </div>
                        <ButtonStyled>
                            <svg aria-label="Tùy chọn khác" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="6" cy="12" r="1.5"></circle>
                                <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                        </ButtonStyled>
                    </div>
                </div>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    top
                    width="100%"
                />
            </CardBody>
            <TitleStyled className="p-3">
                <span className="d-flex justify-content-between mb-2">
                    <span>
                        <ButtonSvg aria-label="Thích" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                        </ButtonSvg>
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
                    <span className="h6">701 lượt thích</span>
                </span>
                <span className="h6">account</span> Nội dung bài viết.
                <span className="d-block text-muted">Xem tất cả 11 bình luận</span>
            </TitleStyled>
        </Card>
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
    font-size: 14px;
    span{
        font-size: 14px;
    }
    .text-muted{
        cursor: pointer;
    }
`

const ButtonStyled = styled.button`
    background-color: white;
    border: none;
`

const ButtonSvg = styled.svg`
    cursor: pointer;
`

export default Post
