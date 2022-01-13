import React, { ChangeEvent, FormEvent } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, FormGroup, Input, Label, Form } from 'reactstrap'
import styled from 'styled-components';
import logo from './../../assets/image/logo.png'

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
        <StyledDiv className='row ' >
            <div className='main-left col p-5'>
                <div>  <img src={logo} alt='name'></img></div>
                <p className='main-left_text'>Where you share, Where we laugh</p>
            </div>
            <div className='main-right col border rounded p-2 d-flex flex-column align-items-center'>
                <Form className='login-content rounded m-2 p-2 ' onSubmit={loginSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            type='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                        <p className='text-danger'>{notificationUserName}</p>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Password
                        </Label>
                        <Input
                            type='password'
                            value={passWord}
                            placeholder='password'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassWord(e.target.value)} />
                        <p className='text-danger'>{notificationPassword}</p>
                    </FormGroup>
                    <FormGroup className=''>
                        <Button className='w-100' type="submit" color="primary">Login</Button>
                    </FormGroup>
                    <hr />
                    <div className='control-login d-flex justify-content-between'>
                        <div>
                            <NavLink to='/forgot' className='text-primary'>Forgot password?</NavLink>
                        </div>
                        <div>
                            <NavLink to='/register' className=' w-50'  color="success">Register</NavLink>
                        </div>
                    </div>



                </Form>

            </div>

        </StyledDiv>
    )
}
export default Login

const StyledDiv = styled.div`
    height : 100%;
    width : 100%;
    padding : 7rem 15rem;
    .main-left_text {
        padding : 0;
        margin : 1rem 0;
        font-size: 1.2rem;
        font-weight: bold;
    };
    .main-right {
        background-color : #ffffff;
    }
    .login-content{
        width: 300px;
    }
    .btn-register{
        width: 300px;
        button{
            width: 100%;
            display:inline-block;
        }
    }
.control-login{
    a{
        text-decoration: none;
        font-weight: 500;
        color: rgba(0,149,246,1);
    }
}
`
