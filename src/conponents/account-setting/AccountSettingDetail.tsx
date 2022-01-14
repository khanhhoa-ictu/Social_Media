import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'
import { UserType } from './../../type/userType';
import avatar from './../../assets/image/no-avatar.png'
import styled from 'styled-components';
import { ChangeAvatar } from '../../api/user.api';
import { useRouteMatch } from 'react-router-dom';

interface Props {
    user: UserType
    email: string,
    submitButton: (name: string, address: string, phone: string, gender: string, desc: string) => void,
}


function AccountSettingDetail(props: Props) {
    const {
        user,
        email,
        submitButton
    } = props

    // const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
    // useEffect(() => {
    //     setInputFile(document.getElementById("input-file") as HTMLInputElement);
    // }, []);

    const inputFile = useRef<HTMLInputElement>(null);
    const handleUpload = () => {
        inputFile.current?.click();
    };
    const handleChangeAvatar = () => {
        inputFile.current?.files && (inputFile.current.files?.length !== 0) &&
            ChangeAvatar(inputFile.current.files[0], user.email).then((data) => {
                console.log(data);
            });
    }

    const [name, setName] = useState(user.name)
    const [desc, setDesc] = useState(user.desc)
    const [phone, setPhone] = useState(user.phone_number)
    const [adress, setAdress] = useState(user.address)
    const [gender, setGender] = useState(user.gender)
    const [isSubmit, setIsSubmit] = useState(false)


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

    const params = useRouteMatch();
    console.log(params);
    return (
        <DivStyled className="p-4">
            <article>
                <div className='wapper__change-avatar d-flex mb-5'>
                    <AvatarStyle>
                        {user.profilePicture === ''
                            ? <img src={avatar} alt='avatar' />
                            : <img src={user.profilePicture} alt='avatar' />
                        }

                    </AvatarStyle>
                    <div className='text__change-name d-flex flex-column ms-4'>
                        <p className='h6 mb-0'>{user.name}</p>
                        <div >
                            <button
                                onClick={handleUpload}
                                className='p-0'
                                style={{ border: '0', backgroundColor: "white", color: "#0095f6", fontSize: "14px", fontWeight: "600px", cursor: "pointer" }}>
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
                            <InputStyled
                                className='col-9 shadow-none'
                                placeholder="Tên"
                                type="text"
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
                            <InputStyled
                                disabled
                                id="exampleEmail"
                                name="email"
                                placeholder="email"
                                type="email"
                                className='shadow-none'
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
                            <InputStyled
                                id="exampleText"
                                name="text"
                                type="textarea"
                                value={desc}
                                className='shadow-none'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setDesc(e.target.value) }}
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
                            <InputStyled
                                id="examplePhone"
                                name="phone"
                                placeholder="phone"
                                type="text"
                                value={phone}
                                className='shadow-none'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setPhone(e.target.value) }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label
                            for="exampleText"
                            sm={3}
                        >
                            Địa chỉ
                        </Label>
                        <Col sm={9}>
                            <InputStyled
                                className='shadow-none'
                                id="exampleText"
                                name="text"
                                type="textarea"
                                value={adress}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setAdress(e.target.value) }}
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
                            <InputStyled
                                id="exampleGender"
                                name="text"
                                className='shadow-none'
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
                        >
                            Gợi ý tài khoản tương tự
                        </Label>
                        <Col
                            sm={{
                                size: 9
                            }}
                        >
                            <FormGroup check>
                                <InputStyled
                                    id="checkbox2"
                                    type="checkbox"
                                    className='shadow-none'
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
                                offset: 2,
                                size: 9
                            }}
                        >
                            {/* style={{ backgroundColor: "#0095f6" }} */}
                            <Button
                                type='submit'
                                outline color='primary'
                            >
                                Gửi
                            </Button>
                            <Button style={{ border: '0', backgroundColor: "white", color: "#0095f6", marginLeft: "40px", fontSize: "14px", fontWeight: "600px" }}>
                                Tạm thời vô hiệu hóa tài khoản
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </article>
        </DivStyled>
    )
}

const AvatarStyle = styled.div`
    width:40px;
    height:40px;
    font-size: 14px !important;
    img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
`

const InputStyled = styled(Input)`
    font-size: 14px;
`

const DivStyled = styled.div`
    font-size: 14px;
`

export default AccountSettingDetail
