import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'
import { UserType } from './../../type/userType';
import avatar from './../../assets/image/no-avatar.png'
import styled from 'styled-components';

interface Props {
    noti: string,
    user: UserType
    email: string,
    submitButton: (name: string, address: string, phone: string, gender: string) => void,
}


function AccountSettingDetail(props: Props) {
    const {
        noti,
        user,
        email,
        submitButton,
    } = props
    console.log(user.name);
    const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
    useEffect(() => {
        setInputFile(document.getElementById("input-file") as HTMLInputElement);
    }, []);

    const handleUpload = () => {
        inputFile?.click();
    };
    
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [gender, setGender] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [notice, setNotice] = useState('')


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
        submitButton(name, phone, adress, gender)
    }

    useEffect(() => {
        validateForm()
    }, [name, email, phone, adress, gender])


    return (
        <div className="p-4">
            <article>
                <div className='wapper__change-avatar d-flex mb-5'>
                    <AvatarStyle>
                        {user.coverPicture === ''
                            ? <img src={avatar} alt='avatar' />
                            : <img src={user.coverPicture} alt='avatar' />
                        }

                    </AvatarStyle>
                    <div className='text__change-name d-flex flex-column ms-4'>
                        <div>{user.name}</div>
                        <div >
                            <button
                                onClick={handleUpload}
                                className='p-0'
                                style={{ border: '0', backgroundColor: "white", color: "#0095f6", fontSize: "14px", fontWeight: "600px", cursor: "pointer" }}>
                                Thay đổi ảnh đại diện
                            </button>
                            <input id="input-file" className="d-none" type="file" />
                        </div>

                    </div>
                    <div>
                        <h6>{noti}</h6>
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
                                className='col-9'
                                placeholder="Tên"
                                type="text"
                                defaultValue={user.name}
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
                                value={user.email}
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
                                defaultValue={user.phone_number}
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
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
                            <Input

                                id="exampleText"
                                name="text"
                                type="textarea"
                                defaultValue={user.address}
                                value={adress}
                                onChange={(e) => { setAdress(e.target.value) }}
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
                                name="text"
                                type="text"
                                defaultValue={user.gender}
                                value={gender}
                                onChange={(e) => { setGender(e.target.value) }}
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
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
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
                                size: 10
                            }}
                        >
                            {/* style={{ backgroundColor: "#0095f6" }} */}
                            <Button type='submit' className={isSubmit ? 'bg-primary' : 'bg-secondary'} >
                                Gửi
                            </Button>

                            <Button style={{ border: '0', backgroundColor: "white", color: "#0095f6", marginLeft: "40px", fontSize: "14px", fontWeight: "600px" }}>
                                Tạm thời vô hiệu hóa tài khoản
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </article>
        </div>
    )
}

const AvatarStyle = styled.div`
    width:40px;
    height:40px;
    img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
`
export default AccountSettingDetail
