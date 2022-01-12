import React from 'react'
import styled from 'styled-components'

const FollowersSuggestion = () => {
    return (
        <RightSide className="mx-3 px-1">
            <div className="py-4 d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center">
                    <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                    <div className="px-3">
                        <p className="h6 mb-0">account</p>
                        <p className="text-muted mb-0">user name</p>
                    </div>
                </div>
                <ButtonStyled className='text-primary'>Chuyển</ButtonStyled>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p className="h6 text-muted mt-1">Gợi ý cho bạn</p>
                <ButtonStyled className="text-dark h6">Xem tất cả</ButtonStyled>
            </div>
            <div>
                <div className="py-2 d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                        <SubAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <div className="px-3">
                            <p className="h6 mb-0">account</p>
                            <p className="text-muted mb-0">user name</p>
                        </div>
                    </div>
                    <ButtonStyled className='text-primary'>Theo dõi</ButtonStyled>
                </div>
                <div className="py-1 d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                        <SubAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <div className="px-3">
                            <p className="h6 mb-0">account</p>
                            <p className="text-muted mb-0">user name</p>
                        </div>
                    </div>
                    <ButtonStyled className='text-primary'>Theo dõi</ButtonStyled>
                </div>
                <div className="py-1 d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                        <SubAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <div className="px-3">
                            <p className="h6 mb-0">account</p>
                            <p className="text-muted mb-0">user name</p>
                        </div>
                    </div>
                    <ButtonStyled className='text-primary'>Theo dõi</ButtonStyled>
                </div>
                <div className="py-1 d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                        <SubAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                        <div className="px-3">
                            <p className="h6 mb-0">account</p>
                            <p className="text-muted mb-0">user name</p>
                        </div>
                    </div>
                    <ButtonStyled className='text-primary'>Theo dõi</ButtonStyled>
                </div>
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
    p, .text-primary{
        font-size: 14px;
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
