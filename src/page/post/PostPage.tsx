import { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { setIsLoading } from '../../action/post.action';
import { deletePost, handleLike, updatePost } from '../../api/post.api';
import { getUserPost } from '../../api/user.api';
// import { getUserPost } from '../../api/user.api';
import Post from '../../conponents/post/Post'
import { PostType } from '../../type/postType';
import { UserType } from '../../type/userType';

interface Props {
    post: PostType,
    user: UserType
}

function PostPage(props: Props) {
    const { post, user } = props
    const isLoading = useSelector((state: any) => state.HomeReducer.post.isLoading)

    const [liked, setLiked] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [postContent, setPostContent] = useState(post.desc);
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploadFileName, setUploadFileName] = useState<string | null>(null);
    const [showDetailPost, setShowDetailPost] = useState<boolean>(false);
    const [userPost, setUserPost] = useState<UserType>()

    const handleUpload = () => {
        inputRef.current?.click();
    }

    const handleDisplayFileDetails = () => {
        inputRef.current?.files && (inputRef.current.files?.length !== 0) &&
            setUploadFileName(URL.createObjectURL(inputRef.current.files[0]));
    }

    const setShowModal = () => {
        setShow(!show)
    }

    const setShowPostDetail = () => {
        setShowDetailPost(!showDetailPost)
    }

    const handleUpdatePost = () => {
        if (uploadFileName) {
            updatePost(user._id, post._id, postContent, uploadFileName)
            setShowModal();
        }
    }

    const handleDeletePost = () => {
        deletePost(user._id, post._id)
        setIsLoading(!isLoading)
    }

    const handleLikePost = () => {
        handleLike(user._id, post._id)
        setLiked(!liked)
        setIsLoading(!isLoading)
    }

    const handleCheckLiked = () => {
        setLiked(post.likes.includes(user._id))
    }

    useEffect(() => {
        getUserPost(post.userId)
            .then((data: any) => {
                setUserPost(data)
            })
            .catch((err: any) => {
                console.log(err)
            })
        handleCheckLiked()
    }, [post])

    return (
        <div>
            <Post
                liked={liked}
                show={show}
                postContent={postContent}
                inputRef={inputRef}
                uploadFileName={uploadFileName}
                showDetailPost={showDetailPost}
                setLiked={setLiked}
                setShow={setShow}
                setPostContent={setPostContent}
                setUploadFileName={setUploadFileName}
                setShowDetailPost={setShowDetailPost}
                handleUpload={handleUpload}
                handleDisplayFileDetails={handleDisplayFileDetails}
                setShowModal={setShowModal}
                setShowPostDetail={setShowPostDetail}
                handleUpdatePost={handleUpdatePost}
                handleDeletePost={handleDeletePost}
                handleLikePost={handleLikePost}

                post={post}
                user={user}
                userPost={userPost}
            />
        </div>
    )
}

export default PostPage
