import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Form, Input } from 'reactstrap'
import styled from 'styled-components';
import logo from './../../assets/image/logo.png'
interface Props {
    email: string,
    userName: string,
    passWord: string,
    passWordConfirm: string,
    notificationEmail: string,
    notificationUserName: string,
    notificationPassWord: string,
    notificationPassWordConfirm: string,
    setEmail: (text: string) => void,
    setUserName: (text: string) => void,
    setPassWord: (text: string) => void,
    setPassWordConfirm: (text: string) => void,
    registerButton: (e: FormEvent<HTMLFormElement>) => void,
    loginButton: () => void
}

const RegisterComponents = (props: Props) => {
    const {
        email,
        userName,
        passWord,
        passWordConfirm,
        notificationEmail,
        notificationUserName,
        notificationPassWord,
        notificationPassWordConfirm,
        setEmail,
        setUserName,
        setPassWord,
        setPassWordConfirm,
        registerButton,
        loginButton
    } = props


    return (
        <StyledDiv className="py-5">
            <CenterDiv className="pt-5">
                <div className="container d-flex align-items-end justify-content-between flex-column">
                    <div className="border rounded mx-auto col-5 bg-white px-4">
                        <div className='py-3 text-center'>
                            <img
                                src={logo}
                                alt='name'
                                height='60'
                            />
                            <p className='text-muted h6 my-4'>Đăng ký để xem ảnh và video từ bạn bè.</p>
                            <hr />
                        </div>
                        <div className='pb-4'>
                            <Form onSubmit={registerButton}>
                                <InputStyled
                                    type='email'
                                    placeholder='Email'
                                    className='shadow-none'
                                    value={email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                                <p className='text-danger'>{notificationEmail}</p>
                                <InputStyled
                                    type='text'
                                    placeholder='Tên người dùng'
                                    className='shadow-none'
                                    value={userName}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
                                <p className='text-danger'>{notificationUserName}</p>
                                <InputStyled
                                    type='password'
                                    placeholder='Nhập mật khẩu'
                                    className='shadow-none'
                                    value={passWord}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassWord(e.target.value)} />
                                <p className='text-danger'>{notificationPassWord}</p>
                                <InputStyled
                                    type='password'
                                    placeholder='Nhập lại mật khẩu'
                                    className='shadow-none'
                                    value={passWordConfirm}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassWordConfirm(e.target.value)} />
                                <p className='text-danger'>{notificationPassWordConfirm}</p>
                                {email && userName && passWord && passWordConfirm ?
                                    <ButtonStyled
                                        type="submit"
                                        className='w-100'
                                        outline color='primary'
                                    >
                                        Đăng ký
                                    </ButtonStyled>
                                    :
                                    <ButtonStyled
                                        type="submit"
                                        className='w-100'
                                        outline color='secondary'
                                        disabled={true}
                                    >
                                        Đăng ký
                                    </ButtonStyled>
                                }
                                <PolicyText className="text-muted text-center mx-auto mt-3 px-3">
                                    Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi.
                                </PolicyText>
                            </Form>
                        </div>
                    </div>
                    <div className="border rounded bg-white my-2 mx-auto col-5 text-center py-4">
                        <span>Bạn có tài khoản? </span>
                        <span className='cursor-pointer text-primary' onClick={loginButton} >Đăng nhập</span>
                    </div>
                </div>
            </CenterDiv>

            <Footer className="text-muted text-center mx-auto">&copy; 2022 MARGASTNI FROM UNIVERSE</Footer>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    height : 100vh;
    background-color: #fafafa;
    font-size: 14px;
`
const InputStyled = styled(Input)`
    background-color: #fafafa;
    padding: 7px 10px;
    margin-bottom: 0;
    font-size: 14px;
    &:focus{
        background-color: #fafafa;
    }
`

const PolicyText = styled.p`
    font-size: 12px;
`

const CenterDiv = styled.div`
    height: 100%;
`

const Footer = styled.p`
    font-size: 12px;
    margin-top: 6px;
`

const ButtonStyled = styled(Button)`
    font-size: 14px;
`


export default RegisterComponents
