import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components';
import logo from './../../assets/image/logo.png'
interface Props {
    email : string,
    userName : string,
    passWord : string,
    passWordConfirm : string,
    notificationEmail : string,
    notificationUserName : string,
    notificationPassWord : string,
    notificationPassWordConfirm : string,
    setEmail : (text : string) => void,
    setUserName : (text : string) => void,
    setPassWord : (text : string) => void,
    setPassWordConfirm: (text : string) => void,
    registerButton : (e : FormEvent<HTMLFormElement>) => void,
    loginButton : () => void
}

const RegisterComponents = (props : Props) => {
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
        <StyledDiv className='row'>
            <div className='col p-5'>
                <img src={logo}
                    alt='name'
                />
                <p className='main-left_text'>Please come with us</p>
            </div>
            <div className='main-right col border rounded p-2'>
                <Form onSubmit={registerButton}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email Address
                        </Label>
                        <Input
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            <p className='text-danger'>{notificationEmail}</p>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            User Name
                        </Label>
                        <Input
                            type='text'
                            placeholder='Enter username'
                            value={userName}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
                            <p className='text-danger'>{notificationUserName}</p>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Password
                        </Label>
                        <Input
                            type='password'
                            placeholder='Enter password'
                            value={passWord}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassWord(e.target.value)} />
                            <p className='text-danger'>{notificationPassWord}</p>

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Confirm Password
                        </Label>
                        <Input
                            type='password'
                            placeholder='Enter password confirm'
                            value={passWordConfirm}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassWordConfirm(e.target.value)} />
                            <p className='text-danger'>{notificationPassWordConfirm}</p>

                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="success">Register</Button>
                        <Button type="button" onClick={loginButton} color="primary">Login</Button>
                    </FormGroup>
                </Form>
            </div>
        </StyledDiv>
    )
}
export default RegisterComponents

const StyledDiv = styled.div`
    height : 100%;
    width : 100%;
    padding : 5rem 15rem;
    background-color : #f0f2f5;
    .main-left_text {
        padding : 0;
        margin : 1rem 0;
        font-size: 1.2rem;
        font-weight: bold;
    };
    .main-right {
        background-color : #ffffff;
        box-shadow: 10px 10px 5px gray;
    }
`
