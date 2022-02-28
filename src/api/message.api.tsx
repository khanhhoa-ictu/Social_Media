import axios, { AxiosResponse } from "axios"
import { NewCommentType } from "../type/commentType"
const URL = 'https://margatsni-team.herokuapp.com'

export const getMessages = (id: string) => {
    return axios.get(URL + `/message/${id}`)
      .then((response: AxiosResponse) => response.data)
  }
  
  export const createMessages = (message:NewCommentType) => {
    return axios.post(URL + `/message/`,message)
      .then((response: AxiosResponse) => response.data)
  }