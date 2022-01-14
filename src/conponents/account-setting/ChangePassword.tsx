import React, { ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components'
import { UserType } from '../../type/userType'
import avatar from './../../assets/image/no-avatar.png'
interface Props {
    user: UserType,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    setOldPassWord: (text: string) => void,
    setNewPassWord: (text: string) => void,
    setConfirmPassWord: (text: string) => void,
    submitButtonPassWord: () => void,
}
function ChangePassword(props: Props) {

    const {
        user,
        oldPassword,
        newPassword,
        confirmPassword,
        setOldPassWord,
        setNewPassWord,
        setConfirmPassWord,
        submitButtonPassWord
    } = props


    return (
        <DivStyled className='p-4'>
            <div className='wapper__img-name d-flex text-center align-items-center mb-5'>
                <AvatarStyle>
                    {user.profilePicture === ''
                        ? <img src={avatar} alt='avatar' />
                        : <img src={user.profilePicture} alt='avatar' />
                    }

                </AvatarStyle>
                <div className='name ms-4'>{user.name}</div>
            </div>
            <div >
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={3}
                    >
                        Mật khẩu cũ
                    </Label>
                    <Col sm={9}>
                        <InputStyled
                            required
                            id="examplePassword"
                            name="password"
                            type="password"
                            className="shadow-none"
                            value={oldPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setOldPassWord(e.target.value) }}
                        />

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={3}
                    >
                        Mật khẩu mới
                    </Label>
                    <Col sm={9}>
                        <InputStyled
                            required
                            id="examplePassword"
                            name="new-password"
                            type="password"
                            className="shadow-none"
                            value={newPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setNewPassWord(e.target.value) }}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={3}
                    >
                        Xác nhận mật khẩu mới
                    </Label>
                    <Col sm={9}>
                        <InputStyled
                            id="examplePassword"
                            name="confirm-password"
                            required
                            type="password"
                            className="shadow-none"
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setConfirmPassWord(e.target.value) }}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={3}
                    >

                    </Label>
                    <Col sm={9}>
                        <ButtonStyled
                            onClick={submitButtonPassWord}
                            outline color="primary"
                            disabled={oldPassword && newPassword && confirmPassword ? false : true}
                        >
                            Đổi mật khẩu
                        </ButtonStyled>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={3}
                    >

                    </Label>
                    <Col sm={9}>
                        <NavLink style={{ color: "#0095f6", textDecoration: "none" }} to={'/forgot'}>
                            Quên mật khẩu?
                        </NavLink>

                    </Col>
                </FormGroup>

            </div>
        </DivStyled>

    )
}
const AvatarStyle = styled.div`
    width:40px;
    height:40px;
    img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
`
const InputStyled = styled(Input)`
    font-size: 14px;
`

const DivStyled = styled.div`
    font-size: 14px;
`

const ButtonStyled = styled(Button)`
    font-size: 14px;
`
export default ChangePassword
