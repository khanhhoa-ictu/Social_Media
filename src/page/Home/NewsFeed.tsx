import { isEmpty } from "lodash";
import Post from "./Post";
import { PostType } from "../../type/postType";
import { UserType } from "../../type/userType";
interface Props {
  newsFeed: PostType[];
  user: UserType;
  CommentPost: (
    profilePicture: string,
    userId: string,
    name: string,
    comment: string,
    postID: string
  ) => void;
  socket: any;
}

const NewFeed = (props: Props) => {
  const { newsFeed, user, CommentPost, socket } = props;
  return (
    <div>
      {!isEmpty(newsFeed) ? (
        newsFeed.map((post, index) => (
          <div key={index}>
            <Post
              post={post}
              user={user}
              CommentPost={CommentPost}
              socket={socket}
            />
          </div>
        ))
      ) : (
        <p>Hong cho đâu! Em chưa follow anh mà đòi xin in tư của anh!</p>
      )}
    </div>
  );
};

export default NewFeed;
