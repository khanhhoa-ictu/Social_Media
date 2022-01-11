import React, { ChangeEvent,FormEvent } from 'react'
import { Button, FormGroup, Input, Label, Form } from 'reactstrap'
import styled from 'styled-components';

interface Props {
    loginSubmit : (e : FormEvent<HTMLFormElement>) => void,
    forgotButton : () => void,
    registerButton : () => void,
    email : string,
    passWord  : string,
    setEmail : (text : string) => void,
    setPassWord : (text : string) => void ,
    notificationUserName  : string,
    notificationPassword  : string
}

const Login = (props : Props) => {
    const {
        loginSubmit,
        forgotButton,
        registerButton,
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
                <img src='https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/271267317_1305996086577186_2952118136131890232_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=OqmTTH62HYwAX-gwq4w&_nc_ht=scontent.fhan14-1.fna&oh=03_AVJWvcU1pY8MTDTC_aokMQrqFCFobZwHa6qEMi7FB2PUfw&oe=62015C52'
                alt='name'
                ></img>
                <p className='main-left_text'>Where you share, Where we laugh</p>
            </div>
            <div className='main-right col border rounded p-2'>
                <Form className='border border-primary rounded m-2 p-2' onSubmit={loginSubmit}>
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
                    <FormGroup className='d-flex justify-content-center'>
                        <Button className='w-100' type="submit" color="primary">Login</Button>
                    </FormGroup>
                    <hr />
                    <FormGroup className='d-flex justify-content-center'>
                        <a onClick={forgotButton} className='text-primary'>Forgot password?</a>
                    </FormGroup>
                </Form>
                <div className='d-flex justify-content-center m-2 '>
                    <Button className=' p-2 w-50' onClick={registerButton} type="button" color="success">Register</Button>
                </div>
            </div>
            
        </StyledDiv>
    )
}
export default Login

const StyledDiv = styled.div`
    height : 100%;
    width : 100%;
    padding : 5rem 15rem;
    background-color : #f0f2f5;
    .main-left_text {
        padding : 0;
        margin : 0.5rem 0;
        font-size: 1.2rem;
        font-weight: bold;
    };
    .main-right {
        background-color : #ffffff;
        box-shadow: 10px 10px 5px gray;
    }
`
