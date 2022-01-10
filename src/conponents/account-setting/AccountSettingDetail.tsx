import React from 'react'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'

function AccountSettingDetail() {
    return (
        <div>
            <article>
                <div className='wapper__change-avatar d-flex'>
                    <div className='img'>Img</div>
                    <div className='text__change-name'>
                        <div>Name</div>
                        <button style={{border:'0', backgroundColor:"white",color: "#0095f6",fontSize:"14px",fontWeight:"600px"}}>Thay đổi ảnh đại diện</button>
                        
                    </div>
                </div>

                <Form>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                               Tên
                            </Label>
                            
                            <Col sm={10}>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Tên"
                                    type="email"
                                />
                                <FormText>
                                Hãy lấy tên mà bạn thường dùng để tài khoản của bạn dễ tìm thấy hơn. Đó có thể là tên đầy đủ, biệt danh hoặc tên doanh nghiệp.
                                </FormText>
                            </Col>
                            
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="examplePassword"
                                sm={2}
                            >
                                Email
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="email"
                                    type="email"
                                />
                            </Col>
                        </FormGroup>
                       
                        <FormGroup row>
                            <Label
                                for="exampleText"
                                sm={2}
                            >
                                Địa chỉ
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                />
                            </Col>
                        </FormGroup>
                        {/* <FormGroup row>
                            <Label
                                for="exampleFile"
                                sm={2}
                            >
                                File
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="exampleFile"
                                    name="file"
                                    type="file"
                                />
                                <FormText>
                                    This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                                </FormText>
                            </Col>
                        </FormGroup> */}
                        <FormGroup
                            row
                            tag="fieldset"
                        >
                            <legend className="col-form-label col-sm-2">
                                Giới tính
                            </legend>
                            <Col sm={10}>
                                <FormGroup check>
                                    <Input
                                        name="radio2"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                       Name
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="radio2"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                       Nữ
                                    </Label>
                                </FormGroup>
                                <FormGroup
                                    check
                                    disabled
                                >
                                    <Input
                                        
                                        name="radio2"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Khác
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="checkbox2"
                                sm={2}
                            >
                                Gợi ý tài khoản tương tự
                            </Label>
                            <Col
                                sm={{
                                    size: 10
                                }}
                            >
                                <FormGroup check>
                                    <Input
                                        id="checkbox2"
                                        type="checkbox"
                                    />
                                    {' '}
                                    <Label check>
                                        Bao gồm tài khoản của bạn khi đề xuất tài khoản tương tự
                                        mà mọi người muốn theo dõi
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
    
                            <Col
                                sm={{
                                    size: 10
                                }}
                            >
                                <FormGroup check>
                                    <Input
                                        id="checkbox2"
                                        type="checkbox"
                                    />
                                    {' '}
                                    <Label>
                                        Tạm thời vô hiệu hóa tài khoản
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            check
                            row
                        >
                            <Col
                                sm={{
                                    offset: 2,
                                    size: 10
                                }}
                            >
                                <Button style={{backgroundColor:"#0095f6"}}>
                                    Gửi
                                </Button>
                                <Button style={{border:'0', backgroundColor:"white",color: "#0095f6",marginLeft:"40px",fontSize:"14px",fontWeight:"600px"}}>
                                    Tạm thời vô hiệu hóa tài khoản
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
            </article>
        </div>
    )
}

export default AccountSettingDetail
