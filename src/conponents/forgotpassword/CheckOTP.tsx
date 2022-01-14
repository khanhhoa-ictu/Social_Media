import React, { ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import { Button, Form, FormGroup, FormText, Input, Label, Nav } from 'reactstrap';
import lock from '../../assets/image/lock.png'
import logo from '../../assets/image/logo.png'

interface Props {
    code: string,
    setCode: (text: string) => void,
    notificationCode: string,
    checkCodeButton: (e: FormEvent<HTMLFormElement>) => void
}

function CheckOTP(props: Props) {
    const {
        code,
        setCode,
        notificationCode,
        checkCodeButton
    } = props

    return (
        <StyledDiv className='d-flex justify-content-center'>
            <DivFullHeight className='d-flex flex-column'>
                <div className="bg-white border-bottom">
                    <Nav className="container py-2">
                        <img src={logo} alt="logo" height='42px;' />
                    </Nav>
                </div>
                <StyledDiv className='container d-flex justify-content-center align-items-center'>
                    <div className='bg-white col-lg-5 p-4 border rounded text-center'>
                        <ImgStyled className='my-4'>
                            <img src={lock} width='70' alt="lock" />
                        </ImgStyled>
                        <Form onSubmit={checkCodeButton}>
                            <FormText className='fw-normal fs-3'>
                                Quên mật khẩu
                            </FormText>
                            <hr />
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Nhập mã OTP
                                    <p className="text-secondary">Chúng tôi đã gửi tới email của bạn mã OTP, hãy kiểm tra hòm thư đến (hoặc hòm thư Spam).</p>
                                </Label>
                                <InputStyled
                                    type='text'
                                    value={code}
                                    className='shadow-none bg-light'
                                    placeholder='Nhập mã OTP'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
                                <p className='text-danger'>{notificationCode}</p>
                            </FormGroup>
                            <hr />
                            <FormGroup>
                                <ButtonStyled
                                    type="submit"
                                    className='w-100'
                                    color="primary"
                                    disabled={code.length === 6 ? false : true}
                                >
                                    Gửi mã
                                </ButtonStyled>
                            </FormGroup>
                        </Form>
                    </div>
                </StyledDiv>
                <Footer className="text-muted text-center">&copy; 2022 MARGASTNI FROM UNIVERSE</Footer>
            </DivFullHeight >
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    height : 100vh;
    width: 100%;
`

const Footer = styled.p`
    font-size: 12px;
    margin-top: -7px;
`

const ButtonStyled = styled(Button)`
    font-size: 14px;
`

const DivFullHeight = styled.div`
    background-color : #f0f2f5;
    width: inherit;
    font-size: 14px;
`

const ImgStyled = styled.div`
    border-radius: 50%;
    width: 96px;
    height: 96px;
    line-height: 82px;
    border: 3px solid #212529;
    margin: auto;
`

const InputStyled = styled(Input)`
    background-color: #fafafa;
    padding: 7px 10px;
    font-size: 14px;
    &:focus{
        background-color: #fafafa;
    }
`


export default CheckOTP
