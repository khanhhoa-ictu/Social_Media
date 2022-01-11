import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import styled from 'styled-components'

interface Props {
    code : string,
    setCode : (text : string) => void,
    notificationCode : string,
    checkCodeButton : (e : FormEvent<HTMLFormElement>) => void
}

function CheckOTP(props : Props) {
    const {
        code,
        setCode,
        notificationCode,
        checkCodeButton
    } = props

    return (
        <StyledDiv className='d-flex justify-content-center'>
            <div className='w-50 p-5 bg-light border rounded'>
                <Form onSubmit={checkCodeButton}>
                    <FormText className='fw-normal fs-3'>
                        Find your account
                    </FormText>
                    <hr/>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Nhap OTP
                        </Label>
                        <Input
                            type='text'
                            value={code}
                            placeholder='Enter OTP'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
                            <p className='text-danger'>{notificationCode}</p>
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Button type="submit" color="primary">Send code!</Button>
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

export default CheckOTP
