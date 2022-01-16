import React, { ChangeEvent, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import background from './../../assets/image/background.png';
import logo from './../../assets/image/logo.png';

interface Props {
    loginSubmit: (e: FormEvent<HTMLFormElement>) => void,
    email: string,
    passWord: string,
    setEmail: (text: string) => void,
    setPassWord: (text: string) => void,
    notificationUserName: string,
    notificationPassword: string
}

const Login = (props: Props) => {
    const {
        loginSubmit,
        email,
        passWord,
        setEmail,
        setPassWord,
        notificationUserName,
        notificationPassword
    } = props

    return (
        <StyledDiv className='row d-md-flex justify-content-around align-items-center font-14'>
            <div className="col-md-7 col-sm-4 d-md-block d-none">
                <ImgBackground src={background} alt="background" />
            </div>
            <div className="col-md-5 col-sm-6">
                <div className='border px-3 rounded bg-white'>
                    <div className='py-5 text-center'>
                        <img src={logo} alt='name' className='d-block w-100' />
                        <p className='h6 mt-4'>Where you share, where we laugh</p>
                    </div>

                    <Form className='rounded m-2 p-2' onSubmit={loginSubmit}>
                        <FormGroup>
                            <InputStyled
                                type='email'
                                value={email}
                                className='shadow-none font-14'
                                placeholder='Email'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            <p className='text-danger'>{notificationUserName}</p>
                        </FormGroup>
                        <FormGroup>
                            <InputStyled
                                type='password'
                                value={passWord}
                                className='shadow-none font-14'
                                placeholder='Mật khẩu'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassWord(e.target.value)} />
                            <p className='text-danger'>{notificationPassword}</p>
                        </FormGroup>
                        <FormGroup className=''>
                            <Button
                                className='w-100 font-14'
                                type="submit"
                                outline color={email && passWord ? 'primary' : 'secondary'}
                                disabled={email && passWord ? false : true}
                            >
                                Đăng nhập
                            </Button>
                        </FormGroup>
                    </Form>
                    <hr className='mx-3' />
                    <div className='text-center pb-3'>
                        <NavLink to='/forgot' className='text-dark text-decoration-none'>Quên mật khẩu?</NavLink>
                    </div>
                </div>
                <div className='py-3 border rounded my-4 bg-white'>
                    <div className='text-center'>
                        <span>Bạn chưa có tài khoản? </span>
                        <NavLink to='/register' className=' w-50 text-decoration-none'>Đăng ký</NavLink>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    margin: auto;
    padding: 0;
    width: 1120px;
    @media (max-width: 1120px){
        width: 100%;
    }
`

const ImgBackground = styled.img`
    width: 650px;
    @media (max-width: 1120px){
        width: 100%;
    }
`

const InputStyled = styled(Input)`
    background-color: #fafafa;
    padding: 7px 10px;
    &:focus{
        background-color: #fafafa;
    }
`

export default Login