import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { setIsLoading } from '../../action/post.action';
import { handleLike } from '../../api/post.api';
import { getUserPost } from '../../api/user.api';
import { RootState } from '../../reducer';
import { PostType } from '../../type/postType';
import { UserType } from '../../type/userType';
import PostNoSetting from './PostNoSetting';

interface Props {
    post: PostType,
    user: UserType
    CommentPost: (profilePicture: string, userId: string, name: string, comment: string, postID: string) => void
}

function PostNoUser(props: Props) {
    const { post, user, CommentPost } = props
    const isLoading = useSelector((state: RootState) => state.HomeReducer.loading.isLoading)
    const [liked, setLiked] = useState<boolean>(false);

    const [postContent, setPostContent] = useState(post.desc);
    const [userPost, setUserPost] = useState<UserType>()

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
            <PostNoSetting
                liked={liked}
                postContent={postContent}
                setLiked={setLiked}
                handleLikePost={handleLikePost}
                CommentPost={CommentPost}
                post={post}
                user={user}
                userPost={userPost}
            />
        </div>
    )
}

export default PostNoUser
