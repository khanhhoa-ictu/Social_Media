import axios, { AxiosResponse } from "axios";
import {post} from './../mockData/post'

export function getPost(): Promise<any> {
    return new Promise((resolve) => {
      resolve(post);
    })

  }
  