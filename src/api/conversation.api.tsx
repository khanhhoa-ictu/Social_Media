import axios, { AxiosResponse } from "axios"
const URL = 'http://localhost:8080'


export const getConversations = (id: string) => {
    return axios.get(URL + `/conversation/${id}`)
      .then((response: AxiosResponse) => response.data)
}
  