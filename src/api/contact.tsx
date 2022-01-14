import axios, { AxiosResponse } from "axios";
import { UpdateInforType } from "../type/userType";

export function updateInfor(email: string, name: string, phone_number: string, address: string, gender: string, desc: string,): Promise<UpdateInforType> {
  return axios.post('http://localhost:8080/user/updateinfor', {
    name: name,
    desc: desc,
    address: address,
    phone_number: phone_number,
    email: email,
    gender: gender
  })
    .then((response: AxiosResponse<any>) => {
      return response.data
    })
}

export function changePasswordUser(oldPassword: string, newPassword: string, email: string): Promise<{msg : string}> {
  return axios.post('http://localhost:8080/user/updatepassword', {
    oldpassword: oldPassword,
    newpassword: newPassword,
    email: email,
  })
    .then((response: AxiosResponse<any>) => response.data)
}
