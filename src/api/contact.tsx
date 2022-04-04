import axios, { AxiosResponse } from "axios";
import { UpdateInforType } from "../type/userType";
const URL = 'http://localhost:8080'

export function updateInfor(email: string, name: string, phone_number: string, address: string, gender: string, desc: string,): Promise<UpdateInforType> {
  return axios.post(URL + '/user/updateinfor', {
    name: name,
    desc: desc,
    address: address,
    phone_number: phone_number,
    email: email,
    gender: gender
  })
    .then((response: AxiosResponse<UpdateInforType>) => {
      return response.data
    })
}

export function changePasswordUser(oldPassword: string, newPassword: string, email: string): Promise<{msg : string}> {
  return axios.post(URL + '/user/updatepassword', {
    oldpassword: oldPassword,
    newpassword: newPassword,
    email: email,
  })
    .then((response: AxiosResponse<{msg : string}>) => response.data)
}
