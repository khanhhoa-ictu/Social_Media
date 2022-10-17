import React, { useEffect, useState } from "react";
import { ModalTitle } from "react-bootstrap";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import styled from "styled-components";
import { getFollower } from "../../api/user.api";
import { FollowingsType } from "../../type/folloingType";
import avatar from "./../../assets/image/no-avatar.png";
interface RouteParams {
  id: string;
}
function ModalFollow() {
  let history = useHistory();
  let { id } = useParams<RouteParams>();
  const [follower, setFollower] = useState<FollowingsType[]>([]);
  useEffect(() => {
    getFollower(id).then((data) => {
      console.log(data);
      setFollower(data);
    });
  }, []);
  return (
    <ModalStyled
      isOpen={true}
      toggle={() => history.goBack()}
      centered
      className="modal border-none"
    >
      <div className="">
        <ModalBody className="p-0 d-flex flex-column">
          <ModalTitle className="text-center h6 py-2 title">
            Người theo dõi
          </ModalTitle>
          {follower.length > 0 &&
            follower?.map((item: FollowingsType, key: number) => {
              return (
                <div className="px-3 d-flex align-items-center" key={key}>
                  <NavLinkHover
                    className="text-decoration-none font-14 text-dark d-flex align-items-center w-100 px-3 py-2"
                    to={`/${item._id}`}
                  >
                    <AvatarStyled
                      src={item?.profilePicture ? item.profilePicture : avatar}
                      alt="avatar"
                    />
                    <div className="ms-5">
                      <span>{item?.name}</span>
                    </div>
                  </NavLinkHover>
                </div>
              );
            })}
        </ModalBody>
      </div>
    </ModalStyled>
  );
}
const NavLinkHover = styled(NavLink)``;
const ModalStyled = styled(Modal)`
  width: 300px;
  height: 350px;
  max-width: none !important;
  .modal-body {
    height: 350px;

    img {
      object-fit: cover;
    }
  }
  .modal-content {
    border: none;
    .modal-header > .modal-title {
      font-size: 16px;
    }
  }
  .modal-backdrop.show {
    opacity: 0.85;
  }
  .title {
    border-bottom: 1px solid rgba(219, 219, 219, 1);
  }
  a {
    color: #212529;
    text-decoration: none;
  }
`;
const AvatarStyled = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
`;
export default ModalFollow;
