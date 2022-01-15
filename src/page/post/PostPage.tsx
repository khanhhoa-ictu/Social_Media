import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../action/post.action';
import { deletePost, handleLike, updatePost } from '../../api/post.api';
import { getUserPost } from '../../api/user.api';
import Post from '../../conponents/post/Post';
import { PostType } from '../../type/postType';
import { UserType } from '../../type/userType';

interface Props {
    post : PostType,
    user : UserType
    CommentPost:(profilePicture: string,userId:string,name:string, comment:string,postID:string)=> void
}

function PostPage(props : Props) {
    const {post , user,CommentPost} = props
    const isLoading = useSelector((state: any) => state.HomeReducer.loading.isLoading)
    const [liked, setLiked] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [postContent, setPostContent] = useState(post.desc);
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploadFileName, setUploadFileName] = useState<any>(post.img);
    const [file,setFile] = useState<any>(null)
    const [userPost, setUserPost] = useState<UserType>()
    let  dispatch = useDispatch()
    const handleUpload = () => {
        inputRef.current?.click();
    }

    const handleDisplayFileDetails = () => {
        if(inputRef.current?.files && inputRef.current.files?.length !== 0){
            setUploadFileName(URL.createObjectURL(inputRef.current.files[0]));
            setFile(inputRef.current.files[0])
        } 
    }

    const setShowModal = () => {
        setShow(!show)
    }


    const handleUpdatePost = () => {
        setShowModal();
        if (uploadFileName) {
            updatePost(user._id, post._id, postContent, file)
                .then(() =>{
                    dispatch(setIsLoading(!isLoading))
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                })
           
            
        }
    } 

    const handleDeletePost = () => {
        deletePost(user._id, post._id)
        dispatch(setIsLoading(!isLoading))
    }

    const handleLikePost = () => {
        handleLike(user._id, post._id)
        setLiked(!liked)
        dispatch(setIsLoading(!isLoading))
    }

    const handleCheckLiked = () => {
        setLiked(post.likes.includes(user._id))
    }

    useEffect(() => {
        getUserPost(post.userId)
            .then((data) => {
                setUserPost(data)
            })
            .catch((err) => {
                console.log(err)
            })
        handleCheckLiked()
    }, [post])
    return (
        <div>
            <Post 
                liked = {liked}
                show = {show}
                postContent = {postContent}
                inputRef = {inputRef}
                uploadFileName = {uploadFileName}
                setLiked = {setLiked}
                setShow = {setShow}
                setPostContent = {setPostContent}
                setUploadFileName = {setUploadFileName}
                handleUpload = {handleUpload}
                handleDisplayFileDetails = {handleDisplayFileDetails}
                setShowModal = {setShowModal}
                handleUpdatePost = {handleUpdatePost}
                handleDeletePost = {handleDeletePost}
                handleLikePost = {handleLikePost}
                CommentPost={CommentPost}
                post = {post}
                user = {user}
                userPost = {userPost}
            />
        </div>
    )
}

export default PostPage
