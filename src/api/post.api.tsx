import axios, { AxiosResponse } from "axios";
import { post } from '../mockData/post'

const url = `http://localhost:8080`;

export function getPost(): Promise<any> {
  return new Promise((resolve) => {
    resolve(post);
  })
  // console.log('halu')
}

export const createPost = (userId: string, postContent: string, imgUrl: string) => {
  return axios.post(url + '/post/create', {
    userId: userId,
    desc: postContent,
    img: imgUrl
  }).then((response: AxiosResponse) => response.data)
}

export const getListTimeline = () => {
  return axios.get(url + '/listTimeline')
    .then((response: AxiosResponse) => response.data)
}

export const updatePost = (postId: string, postContent: string, imgUrl: string) => {
  return axios.post(url + '/post/update', {
    idPost: postId,
    desc: postContent,
    img: imgUrl
  })
    .then((response: AxiosResponse) => response.data)
}

export const deletePost = (userId: string, idPost: string) => {
  return axios.post(url + `/post/delete/${idPost}`, {
    userId: userId
  }
  )
    .then((response: AxiosResponse) => response.data)
}

export const handleLike = (userId: string, idPost: string) => {
  return axios.post(url + `/post/like/${idPost}`, {
    userId: userId
  })
    .then((response: AxiosResponse) => response.data)
}

export const getPostTimeline = () => {

}

export const getFollowerSuggestion = () => {

}