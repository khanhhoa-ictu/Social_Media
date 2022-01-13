import React, { useState } from 'react'
import { handleLike } from '../../api/post.api';
import PostDetail from '../../conponents/post/PostDetail'

interface Props {
    showDetailPost: boolean;
    setShowDetailPost: (showDetailPost: boolean) => void;
}

function PostDetailPage(props : Props) {
    const { showDetailPost, setShowDetailPost } = props;

    const [liked, setLiked] = useState<boolean>(false);

    const setShowModal = () => {
        setShowDetailPost(!showDetailPost)
    }

    const handleLikePost = () => {
        handleLike('61de3ee515a581204443e712', '61de4cdd310ebb0898c24329')
        setLiked(!liked);
    }

    return (
        <div>
            <PostDetail 
                showDetailPost={showDetailPost} 
                setShowDetailPost={setShowDetailPost} 
                liked = {liked}
                setLiked = {setLiked}
                setShowModal = {setShowModal}
                handleLikePost = {handleLikePost}
            />
        </div>
    )
}

export default PostDetailPage
