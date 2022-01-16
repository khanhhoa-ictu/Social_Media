export interface CommentType {
    profilePicture: string,
    id_user: string,
    id_post: string,
    name:string,
    comment: string,
}

export interface CurrentChat{
    conversationId: string,
    createdAt: string,
    sender: string,
    text: string,
    updatedAt: string,
    __v: number,
    _id: string,
}

export interface NewCommentType{
    sender:string,
    text:string,
    conversationId:string,
}
