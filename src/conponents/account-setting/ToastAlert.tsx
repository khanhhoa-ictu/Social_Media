import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'

interface AlertProps {
    showAlert: boolean;
    noti: string;
    notice: string;
    setShowAlert: (showAlert: boolean) => void;
}

const ToastAlert = (props: AlertProps) => {

    const { showAlert, setShowAlert, noti, notice } = props

    const noRefCheck = () => {
        setShowAlert(!showAlert)
    }

    return (
        <div className="p-3 my-2 rounded text-center bg-docs-transparent-grid">
            <Toast
                isOpen={showAlert}
            >
                <ToastHeader toggle={noRefCheck}></ToastHeader>
                <ToastBody>
                    {
                        noti ? noti : notice
                    }
                </ToastBody>
            </Toast>
        </div>
    )
}

export default ToastAlert
