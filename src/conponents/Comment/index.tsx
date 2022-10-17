import React from "react";
import { CardTitle } from "reactstrap";
import styled from "styled-components";
import avatar from "./../../assets/image/no-avatar.png";
interface CommentProps {
  profilePicture: string;
  name: string;
  comment: string;
}
function Comment(props: CommentProps) {
  const { name, comment, profilePicture } = props;
  return (
    <div className="comment-post">
      <div className="d-flex align-items-center my-4">
        {profilePicture === "" ? (
          <AvatarStyled src={avatar} alt="avatar" />
        ) : (
          <AvatarStyled src={profilePicture} alt="avatar" />
        )}

        <div className="mx-3 d-flex align-items-center">
          <TitleStyled className="font-14 mb-0 h6">{name}</TitleStyled>
          <TitleStyled className="font-14 text-muted mx-2">
            {comment}
          </TitleStyled>
        </div>
      </div>
    </div>
  );
}
const AvatarStyled = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
`;
const TitleStyled = styled(CardTitle)`
  .text-muted {
    cursor: pointer;
  }
  .span-time {
    font-size: 10.5px !important;
  }
  margin-bottom: 3px;
`;
export default Comment;
