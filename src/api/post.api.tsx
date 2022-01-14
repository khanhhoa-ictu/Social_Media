import axios, { AxiosResponse } from "axios";
import { post } from '../mockData/post'

const url = `http://localhost:8080`;

// export function getPost(): Promise<any> {
//   return new Promise((resolve) => {
//     resolve(post);
//   })
// }

export const createPost = (userId: string, desc: string, file: any) => {
  let data = new FormData()
  data.append('userId', userId)
  data.append('desc', desc)
  data.append('file', file)
  return axios.post(url + '/post/create',data).then((response: AxiosResponse) => response.data)
}

export const getListTimeline = () => {
  return axios.get(url + '/listTimeline')
    .then((response: AxiosResponse) => response.data)
}

export const updatePost = (userId : string ,postId: string, postContent: string, imgUrl: string) => {
  return axios.post(url + '/post/update', {
    userId : userId,
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

export const getPostTimeline = (email : string) => {
  return axios.get(url + `/newsFeed/${email}`)
    .then((response: AxiosResponse) => response.data)
}

export const getFollowerSuggestion = () => {

}