import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setComment } from "../../action/post.action";
import { getCommentByIDPost, submitComment } from "../../api/comment.api";
import { getPostDetail, handleLike } from "../../api/post.api";
import PostDetail from "./PostDetail";
import { CommentType } from "../../type/commentType";
import { PostDetailType } from "../../type/postType";
import { UserType } from "../../type/userType";

interface RouteParams {
  id: string;
}
interface Props {
  user: UserType;
}
function PostDetailPage(props: Props) {
  const { user } = props;
  const params = useParams<RouteParams>();
  let id = params.id;
  let dispatch = useDispatch();
  const [liked, setLiked] = useState<boolean>(false);

  const handleLikePost = (IdPost: string) => {
    handleLike(user._id, IdPost);
    setLiked(!liked);
  };

  const [postDetail, setPostDetail] = useState<PostDetailType>();
  useEffect(() => {
    getPostDetail(id).then((data: PostDetailType) => {
      setPostDetail(data);
    });
    handleCheckLiked();
  }, [postDetail?.post.likes.length]);
  const handleCheckLiked = () => {
    if (postDetail) {
      setLiked(postDetail?.post.likes.includes(user._id));
    }
  };
  const CommentPost = (
    profilePicture: string,
    userId: string,
    name: string,
    comment: string,
    postID: string
  ) => {
    submitComment(profilePicture, userId, name, comment, postID).then(
      (response: { msg: string }) => {
        if (response) {
          getCommentByIDPost(postID).then((data: { data: CommentType[] }) => {
            dispatch(setComment(data));
          });
        }
      }
    );
  };
  return (
    <div>
      {postDetail && (
        <PostDetail
          id={id}
          user={user}
          liked={liked}
          setLiked={setLiked}
          handleLikePost={handleLikePost}
          postDetail={postDetail}
          CommentPost={CommentPost}
        />
      )}
    </div>
  );
}

export default PostDetailPage;
