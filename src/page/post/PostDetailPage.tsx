import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { setComment } from '../../action/post.action';
import { getCommentByIDPost, submitComment } from '../../api/comment.api';
import { getPostDetail, handleLike } from '../../api/post.api';
import PostDetail from '../../conponents/post/PostDetail'
import { PostDetailType, PostType } from '../../type/postType';

interface RouteParams {
    id: string
}

function PostDetailPage() {
    const params = useParams<RouteParams>();
    let id=params.id;
    let dispatch = useDispatch()
    const [liked, setLiked] = useState<boolean>(false);
    let user = useSelector((state: any) => state.UserReducer.user.state)

    const handleLikePost = (IdPost:string) => {
        // console.log(user._id, userIdPost);
        handleLike(user._id, IdPost)
        setLiked(!liked);
    }
   
    const [postDetail,setPostDetail] = useState<PostDetailType>()
    useEffect(() => {
        getPostDetail(id).then((data:PostDetailType)=>{
            setPostDetail(data)
        })
        handleCheckLiked();
    },[postDetail?.post.likes.length])
    const handleCheckLiked = () => {
        if(postDetail){
            console.log('object');
            setLiked(postDetail?.post.likes.includes(user._id))
        }
    }
    const CommentPost = (profilePicture:string,userId:string,name: string, comment: string, postID:string)=>{
        submitComment(profilePicture,userId,name,comment,postID).then((response:any)=>{
           if(response){
            getCommentByIDPost(postID).then((data:any)=>{
                dispatch(setComment(data))
            })
           }
        })

    }
    return (
        <div>
            {
                postDetail &&  <PostDetail 
                id= {id}
                user={user}
                liked = {liked}
                setLiked = {setLiked}
                handleLikePost = {handleLikePost}
                postDetail = {postDetail}
                CommentPost={CommentPost}
            />
            }
           
        </div>
    )
}

export default PostDetailPage
