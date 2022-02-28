import axios, { AxiosResponse } from "axios"
const URL = 'https://margatsni-team.herokuapp.com'

export const getConversations = (id: string) => {
    return axios.get(URL + `/conversation/${id}`)
      .then((response: AxiosResponse) => response.data)
  }
  