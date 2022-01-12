import axios, { AxiosResponse } from "axios";

export function updateInfor(email : string, name : string, address : string, phone_number : string,gender : string): Promise<any> {
    return axios.post('http://localhost:8080/user/updateinfor', {
        name : name, 
        coverPicture : 'asw',
        desc:'mieu ta',
        address : address, 
        phone_number : phone_number,
        email : email, 
        gender : gender
    })
    .then((response : AxiosResponse<any>) => response.data)
  }

  export function changePasswordUser(oldPassword : string, newPassword : string, email : string): Promise<any> {
    return axios.post('http://localhost:8080/user/updatepassword', {
        oldpassword : oldPassword, 
        newpassword : newPassword,
        email:email,
    })
    .then((response : AxiosResponse<any>) => response.data)
  }
  