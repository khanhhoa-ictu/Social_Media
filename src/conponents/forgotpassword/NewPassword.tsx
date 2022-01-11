import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components'

interface Props {
    newPassword: string,
    confirmPassword: string,
    notificationNewPassword: string,
    notificationConfirmPassword: string,
    setNewPassword: (text : string) => void,
    setConfirmPassword: (text : string) => void,
    changePasswordButton: (e : FormEvent<HTMLFormElement>) => void,
    loginButton: () => void
}

function NewPassword(props : Props) {
    const {
        newPassword,
        confirmPassword,
        notificationNewPassword,
        notificationConfirmPassword,
        setNewPassword,
        setConfirmPassword,
        changePasswordButton,
        loginButton
    } = props

    return (
        <StyledDiv className='d-flex justify-content-center'>
            <div className='w-50 p-5 bg-light border rounded'>
                <Form onSubmit={changePasswordButton}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            PassWord
                        </Label>
                        <Input
                            type='password'
                            value={newPassword}
                            placeholder='Enter New Password'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)} />
                            <p className='notification'>{notificationNewPassword}</p>

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Confirm PassWord
                        </Label>
                        <Input
                            type='password'
                            value={confirmPassword}
                            placeholder='Enter Confirm Password'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
                            <p className='notification'>{notificationConfirmPassword}</p>

                    </FormGroup>
                    <FormGroup className='d-flex justify-content-end'>
                        <Button className='mx-2' type="button" onClick={loginButton} color="secondary">Cancel</Button>
                        <Button type="submit" color="primary">Submit</Button>
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
export default NewPassword
