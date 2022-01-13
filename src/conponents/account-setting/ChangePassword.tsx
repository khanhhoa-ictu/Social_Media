import React, { FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'
import styled from 'styled-components'
import { UserType } from '../../type/userType'
import avatar from './../../assets/image/no-avatar.png'
interface Props {
    notice: string,
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
    const { notice, user, oldPassword, newPassword, confirmPassword,
        setOldPassWord, setNewPassWord, setConfirmPassWord, submitButtonPassWord } = props
    return (
        <div className='p-4'>
            <div className='wapper__img-name d-flex text-center align-items-center mb-5'>
                <AvatarStyle>
                    {user.profilePicture === ''
                        ? <img src={avatar} alt='avatar' />
                        : <img src={user.profilePicture} alt='avatar' />
                    }

                </AvatarStyle>
                <div className='name ms-4'>Name</div>
                <h5>{notice}</h5>
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
                        <Input
                            required
                            id="examplePassword"
                            name="password"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => { setOldPassWord(e.target.value) }}
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
                        <Input
                            required
                            id="examplePassword"
                            name="password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => { setNewPassWord(e.target.value) }}
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
                        <Input
                            id="examplePassword"
                            name="password"
                            required
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassWord(e.target.value) }}
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
                        <Button onClick={submitButtonPassWord} style={{ backgroundColor: "#0095f6" }}>
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

            </div></div>

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
