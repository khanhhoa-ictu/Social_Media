import axios, { AxiosResponse } from "axios";

export function registerUser(email: string, password: string, username: string): Promise<any> {
  return axios.post('http://localhost:8080/user/register', {
    email: email,
    password: password,
    name: username
  })
  .then((response : AxiosResponse<any>) => response.data)
}

export function verifyUser(id : string): Promise<any> {
  return axios.get(`http://localhost:8080/user/verify/` + id)
  .then((response : AxiosResponse<any>) => response.data)
}

export function loginUser(email: string, password: string): Promise<any> {
  return axios.post('http://localhost:8080/user/login', {
    email: email,
    password: password
  })
  .then((response : AxiosResponse<any>) => response.data)
}

export function requestForgotPassword(email : string) : Promise<any> {
  return axios.get('http://localhost:8080/user/request/forgotpassword/' + email)
  .then((response : AxiosResponse<any>) => response.data)
}

export function verifyForgotPassword(email: string, code: string): Promise<any> {
  return axios.post('http://localhost:8080/user/verify/forgotpassword', {
    email: email,
    otp: code
  })
  .then((response : AxiosResponse<any>) => response.data)
}

export function forgotPassword(email: string, code: string, password : string): Promise<any> {
  return axios.post('http://localhost:8080/user/forgotpassword', {
    email: email,
    otp: code,
    newPassword : password
  })
  .then((response : AxiosResponse<any>) => response.data)
}