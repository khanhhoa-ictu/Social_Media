import axios, { AxiosResponse } from "axios";
import { post } from './../mockData/post'

const url = `http://localhost:8080`;

export function getPost(): Promise<any> {
  return new Promise((resolve) => {
    resolve(post);
  })
  // console.log('halu')
}

export const getListPosts = (token: string): Promise<AxiosResponse> => {
  return axios.get(url + '/api/posts', { headers: { 'Authorization': 'Bearer ' + token } });
}