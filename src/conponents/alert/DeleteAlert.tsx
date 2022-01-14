import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

interface DeleteProps {
    showDelete: boolean
    setShowDelete: (showDelete: boolean) => void
    handleDeletePost: () => void
}

const DeleteAlert = (props: DeleteProps) => {

    const { showDelete, setShowDelete, handleDeletePost } = props;

    const cancelDelete = () => {
        setShowDelete(false);
    }

    return (
        <Modal
            centered
            size='sm'
            toggle={function noRefCheck() { }}
            isOpen={showDelete}
        >
            <ModalBody className="text-center border-bottom font-14">
                Bạn chắc chắn muốn xoá bài viết?
            </ModalBody>
            <p
                onClick={handleDeletePost}
                className='text-center text-danger font-14 h6 py-3 mb-0 border-bottom cursor-pointer'
            >
                Xoá bài viết
            </p>
            <p
                onClick={cancelDelete}
                className='text-center h6 font-14 py-3 mb-0 cursor-pointer'
            >
                Huỷ
            </p>
        </Modal>
    )
}

export default DeleteAlert
