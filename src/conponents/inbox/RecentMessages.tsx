import React from 'react'
import styled from 'styled-components'

interface Props {
    setShowInbox: (showIndex: boolean) => void;
}

const RecentMessages = (props: Props) => {

    const { setShowInbox } = props

    return (
        <div className="">
            <div className="text-center py-3 w-100 border-bottom">
                <SpanStyled className="h6">account </SpanStyled>
            </div>
            <div className="recent-inbox">
                <div
                    className="d-flex align-items-center p-3 hover cursor-pointer"
                    onClick={() => setShowInbox(true)}
                >
                    <MainAvatar src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' />
                    <div className="px-3">
                        <p className="h6 mb-0">account</p>
                        <p className="text-muted mb-0">Online</p>
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

const SpanStyled = styled.span`
    line-height: 28px;
`

export default RecentMessages
