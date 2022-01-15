import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Form, FormGroup, Input, Label, Nav } from 'reactstrap';
import styled from 'styled-components';
import lock from '../../assets/image/lock.png'
import logo from '../../assets/image/logo.png'

interface Props {
    email: string,
    notificationEmail: string,
    setEmail: (text: string) => void,
    getCodeButton: (e: FormEvent<HTMLFormElement>) => void,
    loginButton: () => void
}

function Forgot(props: Props) {
    const {
        email,
        notificationEmail,
        setEmail,
        getCodeButton,
        loginButton
    } = props
    return (
        <DivFullHeight>
            <div className="bg-white border-bottom">
                <Nav className="container py-2">
                    <img src={logo} alt="logo" height='42px;' />
                </Nav>
            </div>
            <StyledDiv className='container d-flex justify-content-center align-items-center'>
                <div className='bg-white col-lg-11 border rounded text-center'>
                    <ImgStyled className='my-4'>
                        <img src={lock} width='70' alt="lock" />
                    </ImgStyled>
                    <Form onSubmit={getCodeButton} className='border-bottom pb-5 px-5'>
                        <p className='h6 text-secondary'>
                            Bạn gặp sự cố khi đăng nhập?
                        </p>
                        <hr />
                        <FormGroup>
                            <Label for="exampleEmail" className="text-muted my-2">
                                Nhập email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để truy cập lại vào tài khoản.
                            </Label>
                            <InputStyled
                                type='email'
                                value={email}
                                placeholder='Email'
                                className='shadow-none'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            <p className='text-danger'>{notificationEmail}</p>
                        </FormGroup>
                        <ButtonStyled
                            type="submit"
                            color="primary"
                            className="w-100 mb-5"
                            disabled={email ? false : true}
                        >
                            Gửi mã xác nhận
                        </ButtonStyled>
                    </Form>
                    <div className='bg-light py-3 cursor-pointer text-secondary border-none' onClick={loginButton}>
                        Quay lại đăng nhập
                    </div>

                </div>
            </StyledDiv>
            <Footer className="text-muted text-center">&copy; 2022 MARGASTNI FROM UNIVERSE</Footer>
        </DivFullHeight >
    )
}

const StyledDiv = styled.div`
    padding : 5rem 15rem;
    font-size: 14px;
    height: 90vh;
`

const Footer = styled.p`
    font-size: 12px;
    margin-top: -7px;
`

const ButtonStyled = styled(Button)`
    font-size: 14px;
`

const DivFullHeight = styled.div`
    height: 100vh;
    background-color : #f0f2f5;
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

export default Forgot
