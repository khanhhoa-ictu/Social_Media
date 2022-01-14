import axios, { AxiosResponse } from "axios";

export function submitComment(profilePicture: string, userId: string, name: string, comment: string, id_post: string): Promise<any> {
  return axios.post('http://localhost:8080/comment', {
    profilePicture: profilePicture,
    userId: userId,
    id_post: id_post,
    name: name,
    comment: comment,

  })
    .then((response: AxiosResponse<any>) => response.data)
}

export function getCommentByIDPost(id_post: string): Promise<any> {
  return axios.post("http://localhost:8080/comment/post", {
    id_post: id_post,
  }).then((response: AxiosResponse<any>) => response.data)
}