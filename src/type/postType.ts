import { CommentType } from "./commentType";

export interface PostType {
    comments: CommentType[],
    createdAt: string,
    desc: string,
    name:string,
    img: string,
    likes: string[],
    updatedAt: string,
    userId: string,
    __v: number,
    _id: string
}

export interface PostDetailType{
    userPost: UserPostType,
    post: PostType,
}
export interface UserPostType{
    name:string,
    address: string,
    profilePicture:string,
}
export interface StatePostType {
    listPost : PostType[],
    isLoading : boolean
}
