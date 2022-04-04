import axios, { AxiosResponse } from "axios";
import { FollowingsType } from "../type/folloingType";
import { UpdateInforType, UserType } from "../type/userType";
const URL = 'http://localhost:8080'
export function registerUser(email: string, password: string, username: string): Promise<{msg : string}> {
  return axios.post(URL + '/user/register', {
    email: email,
    password: password,
    name: username
  })
    .then((response: AxiosResponse<{msg : string}>) => {
      return response.data
    })
}

export function verifyUser(id: string): Promise<{msg : string}> {
  return axios.get(URL + `/user/verify/` + id)
    .then((response: AxiosResponse<{msg : string}>) => response.data)
}

export function loginUser(email: string, password: string): Promise<UpdateInforType> {
  return axios.post(URL + '/user/login', {
    email: email,
    password: password
  })
    .then((response: AxiosResponse< UpdateInforType>) => {
      return response.data
    })
}

export function requestForgotPassword(email: string): Promise<{msg : string, email : string}> {
  return axios.get(URL + '/user/request/forgotpassword/' + email)
    .then((response: AxiosResponse<{msg : string, email : string}>) => response.data)
}

export function verifyForgotPassword(email: string, code: string): Promise<{msg: String, otp: string}> {
  return axios.post(URL + '/user/verify/forgotpassword', {
    email: email,
    otp: code
  })
    .then((response: AxiosResponse<{msg: String, otp: string}>) => response.data)
}

export function forgotPassword(email: string, code: string, password: string): Promise<{msg : string}> {
  return axios.post(URL + '/user/forgotpassword', {
    email: email,
    otp: code,
    newPassword: password
  })
    .then((response: AxiosResponse<{msg : string}>) => response.data)
}

export function verifyAuth(email: string, token: string): Promise<{msg : string}> {
  return axios.post(URL + '/auth', {
    email: email,
    token: token
  })
    .then((response: AxiosResponse<{msg : string}>) => response.data)
}

export function getUser(email: string): Promise<UserType> {
  return axios.post(URL + '/user/getuser', {
    email: email,
  })
    .then((response: AxiosResponse<UserType>) => response.data)
}

export function getUserID(id: string): Promise<UserType> {
  return axios.get(URL + `/user/getuser/${id}`)
    .then((response: AxiosResponse<UserType>) => response.data)
}

export function getUserPost(userId: string): Promise<UserType> {
  return axios.get(URL + '/user/getuserpost/' + userId)
    .then((response: AxiosResponse<UserType>) => response.data)
}
export function ChangeAvatar(file: string | Blob, email: string): Promise<{msg : string, data : UserType}> {
  let data = new FormData()
  data.append('file', file)
  data.append('email', email)

  return axios.post(URL + '/user/changeavatar', data)
    .then((response: AxiosResponse<{msg : string, data : UserType}>) => response.data)
}

export function getFriendSuggestion(id: string): Promise<FollowingsType[]> {
  return axios.get(URL + `/user/friendsuggestion/${id}`)
    .then((response: AxiosResponse<FollowingsType[]>) => response.data)
}

export function followUser(currentUserId: string, UserFollowId: string): Promise<string> {
  return axios.post(URL + `/user/${UserFollowId}/follower`, {
    id: currentUserId
  })
    .then((response: AxiosResponse<string>) => response.data)
}

export function unFollowUser(currentUserId: string, UserFollowId: string): Promise<string> {
  return axios.put(URL + `/user/${UserFollowId}/unfollower`, {
    userId: currentUserId
  })
    .then((response: AxiosResponse<string>) => response.data)
}

export function searchUser(name:string): Promise<any> {
  return axios.get(URL + `/user/${name}`)
    .then((response: AxiosResponse<any>) => response.data)
}

export function getPostUser(id: string): Promise<any> {
  return axios.get(URL + `/user/getuserprofile/${id}`)
    .then((response: AxiosResponse<any>) => response.data)
}
export function deleteUser(id: string): Promise<{msg : string}> {
  return axios.get(URL + `/user/delete/${id}`)
    .then((response: AxiosResponse<{msg : string}>) => response.data)
}

export function getFollower(id: string): Promise<any> {
  return axios.get(URL + `/${id}/follower`)
    .then((response: AxiosResponse<any>) => response.data)
}
export function getFollowing(id: string): Promise<any> {
  return axios.get(URL + `/${id}/following`)
    .then((response: AxiosResponse<any>) => response.data)
}
