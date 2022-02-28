import axios, { AxiosResponse } from "axios";
import { CommentType } from "../type/commentType";
const URL = 'https://margatsni-team.herokuapp.com'
export function submitComment(profilePicture: string, userId: string, name: string, comment: string, id_post: string): Promise<{msg : string}> {
  return axios.post(URL + '/comment', {
    profilePicture: profilePicture,
    userId: userId,
    id_post: id_post,
    name: name,
    comment: comment,

  })
    .then((response: AxiosResponse<{msg : string}>) => response.data)
}

export function getCommentByIDPost(id_post: string): Promise<{data : CommentType[]}> {
  return axios.post(URL + "/comment/post", {
    id_post: id_post,
  }).then((response: AxiosResponse<{data : CommentType[]}>) => response.data)
}