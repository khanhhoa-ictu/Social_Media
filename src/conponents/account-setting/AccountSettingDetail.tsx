import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { FormGroup, Input, Button, Label, Col, FormText, Form } from 'reactstrap'

interface Props {
    name : string, 
    email : string,
    adress : string, 
    phone : string,
    gender : string, 
    isSubmit : boolean,
    setName : (text : string) => void,
    setEmail  : (text : string) => void,
    setPhone : (text : string) => void,
    setAdress  : (text : string) => void,
    setGender  : (text : string) => void,
    submitButton : (e : FormEvent<HTMLFormElement>) => void,
    validateForm : () => void
}


function AccountSettingDetail(props : Props) {
    const {
        name , 
        email ,
        adress  ,
        phone,
        gender  , 
        isSubmit ,
        setName,
        setEmail ,
        setPhone,
        setAdress ,
        setGender ,
        submitButton,
        validateForm 
    } = props
   

    const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
    useEffect(() => {
      setInputFile(document.getElementById("input-file") as HTMLInputElement);
    }, []);
  
    const handleUpload = () => {
      inputFile?.click();
    };


    return (
        <div>
            <article>
                <div className='wapper__change-avatar d-flex'>
                    <div className='img'>Img</div>
                    <div className='text__change-name'>
                        <div>Name</div>
                        <div 
                        onClick={handleUpload}

                        style={{ border: '0', backgroundColor: "white", color: "#0095f6", fontSize: "14px", fontWeight: "600px",cursor:"pointer" }}>
                            Thay đổi ảnh đại diện
                        </div>
                        <input id="input-file" className="d-none" type="file" />
                    </div>
                </div>

                <Form onSubmit={submitButton}>
                    <FormGroup row>
                        <Label
                            for="exampleName"
                            sm={2}
                        >
                            Tên
                        </Label>

                        <Col sm={10}>
                            <Input
                                placeholder="Tên"
                                type="text"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setName(e.target.value)
                                    validateForm()
                                }}
                            />
                            <FormText>
                                Hãy lấy tên mà bạn thường dùng để tài khoản của bạn dễ tìm thấy hơn. Đó có thể là tên đầy đủ, biệt danh hoặc tên doanh nghiệp.
                            </FormText>
                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"
                            sm={2}
                        >
                            Email
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    validateForm()
                                }}
                                />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="examplePhone"
                            sm={2}
                        >
                            Số điện thoại
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="examplePhone"
                                name="phone"
                                placeholder="phone"
                                type="text"
                                value={phone}
                                onChange={(e) => {setPhone(e.target.value)}}
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
                                value={adress}
                                onChange={(e) => {setAdress(e.target.value)}}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup
                        row
                        tag="fieldset"
                    >
                        <Label
                            for="exampleGender"
                            sm={2}
                        >
                           Giowis tinhs
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleGender"
                                name="text"
                                type="text"
                                value={gender}
                                onChange={(e) => {setGender(e.target.value)}}
                            />
                        </Col>
                        {/* <legend className="col-form-label col-sm-2">
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
                                    Nam
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
                        </Col> */}
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
                            {/* style={{ backgroundColor: "#0095f6" }} */}
                            <Button type='submit' className={isSubmit? 'bg-primary' : 'bg-secondary'} >
                                Gửi
                            </Button>

                            <Button style={{ border: '0', backgroundColor: "white", color: "#0095f6", marginLeft: "40px", fontSize: "14px", fontWeight: "600px" }}>
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
