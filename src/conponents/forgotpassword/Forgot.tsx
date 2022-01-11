import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import styled from 'styled-components';
interface Props {
    email : string,
    notificationEmail: string,
    setEmail : (text : string) => void,
    getCodeButton  : (e : FormEvent<HTMLFormElement>) => void,
    loginButton : () => void
}

function Forgot(props : Props) {
    const {
        email,
        notificationEmail,
        setEmail,
        getCodeButton,
        loginButton
    } = props
    return (
        <StyledDiv className='d-flex justify-content-center'>
            <div className='w-50 p-5 bg-light border rounded'>
                <Form onSubmit={getCodeButton}>
                    <FormText className='fw-normal fs-3'>
                        Find your account
                    </FormText>
                    <hr />
                    <FormGroup>
                        <Label for="exampleEmail">
                            Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.
                        </Label>
                        <Input
                            type='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            <p className='text-danger'>{notificationEmail}</p>
                    </FormGroup>
                    <hr />
                    <FormGroup className='d-flex justify-content-end'>
                        <Button className='mx-2' type="button" onClick={loginButton} color="secondary">Cancel</Button>
                        <Button type="submit" color="primary">Get code!</Button>
                    </FormGroup>
                </Form>
                
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    height : 100%;
    width : 100%;
    padding : 5rem 15rem;
    background-color : #f0f2f5;
`
export default Forgot
