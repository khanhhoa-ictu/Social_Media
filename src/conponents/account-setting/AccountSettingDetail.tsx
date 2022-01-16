import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'
import { UserType } from './../../type/userType';
import avatar from './../../assets/image/no-avatar.png'
import styled from 'styled-components';
import { ChangeAvatar } from '../../api/user.api';
import { useRouteMatch } from 'react-router-dom';
import ToastAlert from '../alert/ToastAlert';

interface Props {
    user: UserType
    email: string,
    submitButton: (name: string, address: string, phone: string, gender: string, desc: string) => void,
    handleDelete: () => void
}


function AccountSettingDetail(props: Props) {
    const {
        user,
        email,
        submitButton,
        handleDelete
    } = props
    const inputFile = useRef<HTMLInputElement>(null);
    const handleUpload = () => {
        inputFile.current?.click();
    };
    const handleChangeAvatar = () => {
        inputFile.current?.files && (inputFile.current.files?.length !== 0) &&
            ChangeAvatar(inputFile.current.files[0], user.email).then((data) => {
                console.log(data);
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 1000)
            });
    }
    useEffect(() => {
        setUserSetting(user)
    },[user.profilePicture])

    const [name, setName] = useState(user.name)
    const [desc, setDesc] = useState(user.desc)
    const [phone, setPhone] = useState(user.phone_number)
    const [adress, setAdress] = useState(user.address)
    const [gender, setGender] = useState(user.gender)
    const [isSubmit, setIsSubmit] = useState(false)
    const [userSetting,setUserSetting] = useState<UserType>(user)
    const [showAlert, setShowAlert] = useState(false);
    const validateForm = () => {
        if (!name || !email || !phone || !adress || !gender) {
            setIsSubmit(false)
            return
        }
        setIsSubmit(true)
        return
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitButton(name, phone, adress, gender, desc)
    }

    useEffect(() => {
        validateForm()
    }, [name, email, phone, adress, gender])

    return (
        <div className="p-sm-4 p-2 font-14">
                <ToastAlert showAlert={showAlert} setShowAlert={setShowAlert} noti={'thay doi anh dai dien thanh cong'} />

            <article>
                <div className='wapper__change-avatar d-flex mb-md-5 mb-2'>

                    <AvatarStyle className="font-14">
                        {userSetting.profilePicture === ''
                            ? <img src={avatar} alt='avatar' />
                            : <img src={userSetting.profilePicture} alt='avatar' />
                        }

                    </AvatarStyle>
                    <div className='text__change-name d-flex flex-column ms-4'>
                        <p className='h6 mb-0 font-14'>{user.name}</p>
                        <div >
                            <button
                                onClick={handleUpload}
                                className='p-0 bg-white font-14 h6 cursor-pointer'
                                style={{ color: "#0095f6", border: 'none' }}>
                                Thay đổi ảnh đại diện
                            </button>
                            <input id="input-file" className="d-none" type="file" ref={inputFile} onChange={handleChangeAvatar} />
                        </div>
                    </div>
                </div>

                <Form onSubmit={submitForm}>
                    <FormGroup row>
                        <Label
                            for="exampleName"
                            sm={3}
                        >
                            Tên
                        </Label>

                        <Col sm={9}>
                            <Input
                                className='col-9 shadow-none font-14'
                                placeholder="Tên"
                                type="text"
                                name='exampleName'
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setName(e.target.value)
                                    validateForm()
                                }}
                            />
                            <FormText>
                                Hãy lấy tên mà bạn thường dùng để tài khoản của bạn dễ tìm thấy hơn. Đó có thể là tên đầy đủ, biệt danh hoặc tên doanh nghiệp.
                            </FormText>
                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"
                            sm={3}
                        >
                            Email
                        </Label>
                        <Col sm={9}>
                            <Input
                                disabled
                                id="exampleEmail"
                                name="email"
                                placeholder="email"
                                type="email"
                                className='shadow-none font-14'
                                value={user.email}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleText"
                            sm={3}
                        >
                            Tiểu sử
                        </Label>
                        <Col sm={9}>
                            <TextAreaStyled
                                id="exampleDesc"
                                name="desc"
                                value={desc}
                                className='shadow-none form-control font-14'
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setDesc(e.target.value) }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label
                            for="examplePhone"
                            sm={3}
                        >
                            Số điện thoại
                        </Label>
                        <Col sm={9}>
                            <Input
                                id="examplePhone"
                                name="phone"
                                placeholder="phone"
                                type="text"
                                value={phone}
                                className='shadow-none font-14'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setPhone(e.target.value) }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label
                            for="exampleAdd"
                            sm={3}
                        >
                            Địa chỉ
                        </Label>
                        <Col sm={9}>
                            <TextAreaStyled
                                className='shadow-none form-control font-14'
                                id="exampleAdd"
                                name="exampleAdd"
                                value={adress}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setAdress(e.target.value) }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup
                        row
                        tag="fieldset"
                    >
                        <Label
                            for="exampleGender"
                            sm={3}
                        >
                            Giới tính
                        </Label>
                        <Col sm={9}>
                            <Input
                                id="exampleGender"
                                name="exampleGender"
                                className='shadow-none font-14'
                                type="text"
                                value={gender}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setGender(e.target.value) }}
                            />
                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="checkbox2"
                            sm={3}
                            className="py-0"
                        >
                            Gợi ý tài khoản tương tự
                        </Label>
                        <Col
                            sm={{
                                size: 9
                            }}
                        >
                            <FormGroup check>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                    className='shadow-none font-14'
                                />
                                {' '}
                                <Label check>
                                    Bao gồm tài khoản của bạn khi đề xuất tài khoản tương tự
                                    mà mọi người muốn theo dõi
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup
                        check
                        row
                    >
                        <Col
                            sm={{
                                offset: 0,
                                size: 11
                            }}
                        >
                            <Button
                                type='submit'
                                outline color='primary'
                                className='font-14'
                            >
                                Gửi
                            </Button>
                            <DeleteStyle
                                onClick={handleDelete}
                                className='font-14 ms-2'
                            >
                                Tạm thời vô hiệu hóa tài khoản
                            </DeleteStyle>

                        </Col>

                    </FormGroup>

                </Form>
            </article>
        </div>
    )
}
const DeleteStyle = styled(Button)`
border: 0px;
background-color: white;
color: rgb(0, 149, 246);
margin-left: 40px;
font-size: 14px;
`
const AvatarStyle = styled.div`
    width:40px;
    height:40px;
    img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
`

const TextAreaStyled = styled.textarea`
    resize: none;
`

export default AccountSettingDetail
