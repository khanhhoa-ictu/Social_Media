import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import styled from 'styled-components'
import lock from '../../assets/image/lock.png'

interface Props {
    newPassword: string,
    confirmPassword: string,
    notificationNewPassword: string,
    notificationConfirmPassword: string,
    setNewPassword: (text: string) => void,
    setConfirmPassword: (text: string) => void,
    changePasswordButton: (e: FormEvent<HTMLFormElement>) => void,
    loginButton: () => void
}

function NewPassword(props: Props) {
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
        <StyledDiv className='bg-light d-flex justify-content-center align-items-center'>
            <DivFullHeight className='d-flex flex-column font-14'>
                <StyledDiv className='container pt-5 d-flex flex-column justify-content-between align-items-center'>
                    <div className='col-lg-6 col-md-7 col-sm-9 col-10 my-5 p-4 border text-center bg-white rounded'>
                        <ImgStyled className='my-4'>
                            <img src={lock} width='70' alt="lock" />
                        </ImgStyled>
                        <p className="h5 text-muted">Tạo mật khẩu mới</p>
                        <hr className="my-4" />
                        <Form onSubmit={changePasswordButton}>
                            <FormGroup>
                                <InputStyled
                                    type='password'
                                    value={newPassword}
                                    className='shadow-none font-14'
                                    placeholder='Nhập mật khẩu mới'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)} />
                                <p className='notification'>{notificationNewPassword}</p>

                            </FormGroup>
                            <FormGroup>
                                <InputStyled
                                    type='password'
                                    value={confirmPassword}
                                    className='shadow-none font-14'
                                    placeholder='Nhập lại mật khẩu mới'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
                                <p className='notification'>{notificationConfirmPassword}</p>

                            </FormGroup>
                            <Button className='w-100 font-14 mb-2' type="submit" outline color="primary">Xác nhận</Button>
                            <Button className='w-100 font-14' onClick={loginButton} outline color="secondary">Huỷ</Button>
                        </Form>
                    </div>
                    <Footer className="text-muted text-center">&copy; 2022 MARGASTNI FROM UNIVERSE</Footer>
                </StyledDiv>
            </DivFullHeight >
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    height : 100vh;
    width : 100%;
`
const Footer = styled.p`
    font-size: 12px;
`

const DivFullHeight = styled.div`
    background-color : #f0f2f5;
    width: inherit;
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
    &:focus{
        background-color: #fafafa;
    }
`
export default NewPassword
