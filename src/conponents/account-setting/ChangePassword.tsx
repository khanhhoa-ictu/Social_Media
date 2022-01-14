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
        <div className='p-4  font-14'>
            <div className='wapper__img-name d-flex text-center align-items-center mb-4'>
                <AvatarStyle>
                    {user.profilePicture === ''
                        ? <img src={avatar} alt='avatar' />
                        : <img src={user.profilePicture} alt='avatar' />
                    }

                </AvatarStyle>
                <div className='name ms-4 h6 mb-0 font-14'>{user.name}</div>
            </div>
            <div >
                <FormGroup row>
                    <Label
                        for="password"
                        sm={3}
                    >
                        Mật khẩu cũ
                    </Label>
                    <Col sm={9}>
                        <Input
                            required
                            id="password"
                            name="password"
                            type="password"
                            className="shadow-none font-14"
                            value={oldPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setOldPassWord(e.target.value) }}
                        />

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="new-password"
                        sm={3}
                    >
                        Mật khẩu mới
                    </Label>
                    <Col sm={9}>
                        <Input
                            required
                            id="new-password"
                            name="new-password"
                            type="password"
                            className="shadow-none font-14"
                            value={newPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setNewPassWord(e.target.value) }}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="confirm-password"
                        sm={3}
                    >
                        Xác nhận mật khẩu mới
                    </Label>
                    <Col sm={9}>
                        <Input
                            id="confirm-password"
                            name="confirm-password"
                            required
                            type="password"
                            className="shadow-none font-14"
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
                        <Button
                            onClick={submitButtonPassWord}
                            outline color="primary"
                            className='font-14'
                            disabled={oldPassword && newPassword && confirmPassword ? false : true}
                        >
                            Đổi mật khẩu
                        </Button>
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
        </div>

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
export default ChangePassword
