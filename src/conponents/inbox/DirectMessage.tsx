import React from 'react'
import { Input } from 'reactstrap'
import styled from 'styled-components'

const DirectMessage = () => {


    return (
        <div className="h-100">
            <div className="d-flex h-100 justify-content-end flex-column pb-4">
                <div className="p-3 w-100 border-bottom">
                    <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                    <span className="h6 mx-3">account </span>
                </div>
                <div className="recent-inbox">
                    <div className="d-flex align-items-center p-3">
                        <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <ChatLine className="mx-3 mb-0 px-3 py-1 border">Hello</ChatLine>
                    </div>
                    <div className="d-flex align-items-center p-3 flex-row-reverse">
                        <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <ChatLine className="mx-3 mb-0 px-3 py-1 border">Hello</ChatLine>
                    </div>
                    <div className="d-flex align-items-center p-3">
                        <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <ChatLine className="mx-3 mb-0 px-3 py-1 border">Hello</ChatLine>
                    </div>
                    <div className="d-flex align-items-center p-3 flex-row-reverse">
                        <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <ChatLine className="mx-3 mb-0 px-3 py-1 border">Hello</ChatLine>
                    </div>
                    <div className="d-flex align-items-center p-3">
                        <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <ChatLine className="mx-3 mb-0 px-3 py-1 border">Hello</ChatLine>
                    </div>
                    <div className="d-flex align-items-center p-3 flex-row-reverse">
                        <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <ChatLine className="mx-3 mb-0 px-3 py-1 border">Hello</ChatLine>
                    </div>
                </div>
                <BoxInput className="mt-auto d-flex align-items-center mx-4 border">
                    <ButtonSvg aria-label="Biểu tượng cảm xúc" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                    </ButtonSvg>
                    <CommentInput type="text" className="shadow-none" placeholder="Thêm bình luận ..." />
                    <ButtonPostStyled className='text-primary px-1'>Gửi</ButtonPostStyled>
                </BoxInput>
            </div>
        </div>
    )
}

const MainAvatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`

const ChatLine = styled.p`
    border-radius: 20px; 
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

const BoxInput = styled.div`
    padding: 5px 15px;
    border-radius: 28px;
`


export default DirectMessage
