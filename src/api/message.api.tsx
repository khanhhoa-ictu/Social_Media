import axios, { AxiosResponse } from "axios"
import { NewCommentType } from "../type/commentType"

export const getMessages = (id: string) => {
    return axios.get(`http://localhost:8080/message/${id}`)
      .then((response: AxiosResponse) => response.data)
  }
  
  export const createMessages = (message:NewCommentType) => {
    return axios.post(`http://localhost:8080/message/`,message)
      .then((response: AxiosResponse) => response.data)
  }