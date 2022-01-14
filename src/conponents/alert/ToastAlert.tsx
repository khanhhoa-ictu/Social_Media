import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import styled, { keyframes } from 'styled-components'

interface AlertProps {
    showAlert: boolean;
    noti: string;
    setShowAlert: (showAlert: boolean) => void;
}

const ToastAlert = (props: AlertProps) => {

    const { showAlert, setShowAlert, noti } = props

    const noRefCheck = () => {
        setShowAlert(!showAlert)
    }

    return (
        <AlertDiv className="p-3 my-2 rounded">
            <Toast
                isOpen={showAlert}
            >
                <ToastBody className="p-4 text-center h6 mb-0">{noti}</ToastBody>
            </Toast>
        </AlertDiv>
    )
}


const openAlert = keyframes`
    from {
        opacity: 0;
        top: -120px;
    }
    to {
        opacity: 1;
        top: 49px;
    }
`

const AlertDiv = styled.div`
    z-index: 1;
    position: fixed;
    left: calc(50% - 174px);
    animation: ${openAlert} ease .3s;
`

export default ToastAlert
