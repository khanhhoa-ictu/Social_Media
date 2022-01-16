import axios, { AxiosResponse } from "axios"

export const getConversations = (id: string) => {
    return axios.get(`http://localhost:8080/conversation/${id}`)
      .then((response: AxiosResponse) => response.data)
  }
  