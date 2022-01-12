import axios, { AxiosResponse } from "axios";
import { post } from './../mockData/post'

const url = `http://localhost:8080`;

export function getPost(): Promise<any> {
    return new Promise((resolve) => {
      resolve(post);
    })
  }
  
