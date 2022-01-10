import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'

function ChangePassword() {
    return (
        <><div className='wapper__img-name d-flex text-center'>
            <div className='img'><img src="" alt="" />Img</div>
            <div className='name'>Name</div>
        </div>
            <Form>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}
                    >
                        Mật khẩu cũ
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="examplePassword"
                            name="password"
                      
                            type="email"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}
                    >
                        Mật khẩu mới
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="examplePassword"
                            name="password"
                          
                            type="email"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}
                    >
                        Xác nhận mật khẩu mới
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="examplePassword"
                            name="password"
                           
                            type="email"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}
                    >

                    </Label>
                    <Col sm={10}>
                        <Button style={{ backgroundColor: "#0095f6" }}>
                            Đổi mật khẩu
                        </Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}
                    >

                    </Label>
                    <Col sm={10}>
                        <NavLink style={{ color: "#0095f6",textDecoration:"none" }} to={''}>
                            Quên mật khẩu?
                        </NavLink>

                    </Col>
                </FormGroup>

            </Form></>

    )
}
export default ChangePassword
