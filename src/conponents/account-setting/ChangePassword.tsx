import React, { FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'
import { UserType } from '../../type/userType'

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
         setOldPassWord, setNewPassWord, setConfirmPassWord,submitButtonPassWord } = props
    return (
        <div className='p-4'>
            <div className='wapper__img-name d-flex text-center'>
                <div className='img'><img src="" alt="" />Img</div>
                <div className='name'>Name</div>
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
                        <Button onClick={submitButtonPassWord}  style={{ backgroundColor: "#0095f6" }}>
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
                        <NavLink style={{ color: "#0095f6", textDecoration: "none" }} to={''}>
                            Quên mật khẩu?
                        </NavLink>

                    </Col>
                </FormGroup>

            </div></div>

    )
}
export default ChangePassword
