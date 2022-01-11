import React from 'react'
import { Button, Input, Label } from 'reactstrap'

interface Props {
    email: string,
    userName: string,
    desc: string,
    phone: string,
    gender: string,
    coverPicture: string,
    address: string,
    setEmail: (text: string) => void,
    setUserName: (text: string) => void,
    setDesc: (text: string) => void,
    setPhone: (text: string) => void,
    setGender: (text: string) => void,
    setCoverPicture?: (text: string) => void,
    setAddress: (text: string) => void,
    changeUser:()=>void
}
function SettingUser(props: Props) {
    const { email, userName,desc,phone,gender,coverPicture,address, changeUser,
         setEmail, setUserName, setDesc, setPhone, setGender, setCoverPicture = () => { }, setAddress } = props
    return (
        <div>
            <div>
                <img />
                <p>name</p>
                <p>thay doi anh dai dien</p>
            </div>
            <div>
                <Label>Ten</Label>
                <Input type="email" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <Label>email</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Label>Tieu su</Label>
                <Input type="email" value={desc} onChange={(e) => setDesc(e.target.value)} />
                <Label>Địa chỉ</Label>
                <Input type="email" value={address} onChange={(e) => setAddress(e.target.value)} />
                <Label>So dien thoai</Label>
                <Input type="email" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Label>gioi tinh</Label>
                <Input type="email" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
                <Button onClick={changeUser}>Gửi</Button>
                <p>tam thoi vo hieu hoa tai khoản</p>
            </div>
        </div>
    )
}

export default SettingUser
