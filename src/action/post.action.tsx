import { CommentType } from "../type/commentType";
import { PostType } from "../type/postType";

export const setPost = (data: PostType[]) => ({
    type: 'SET_LIST_TIMELINES_POST',
    payload : data,
});

export const setIsLoading = (data: boolean) => ({
    type: 'SET_IS_LOADING',
    payload : data,
});
  
export const setComment = (payload: string | {data : CommentType[]}) => ({
    type:'SET_COMMENT',
    payload,
});

