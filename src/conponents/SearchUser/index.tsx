import React, { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import avatar from "./../../assets/image/no-avatar.png";
interface SearchUserProps {
  changeSearch: (value: ChangeEvent<HTMLInputElement>) => void;
  userSearch: any;
}
function SearchUser({ changeSearch, userSearch }: SearchUserProps) {
  return (
    <div className="position-relative">
      <InputStyled
        className="rounded-5 search font-14"
        type="search"
        placeholder="Tìm kiếm"
        onChange={changeSearch}
      />
      <SearchStyled className="bg-white">
        {userSearch.length > 0 &&
          userSearch?.map((item: any, key: number) => {
            return (
              <div className="d-flex align-items-center" key={item._id}>
                <NavLinkHover
                  className="text-decoration-none font-14 text-dark d-flex align-items-center w-100 px-3 py-2"
                  to={`/${item._id}`}
                >
                  <AvatarStyled
                    src={item?.profilePicture ? item.profilePicture : avatar}
                    alt="avatar"
                  />
                  <div className="mx-2">
                    <span>{item?.name}</span>
                    <p className="text-muted mb-0">
                      {item?.address ? item.address + ", vn" : null}
                    </p>
                  </div>
                </NavLinkHover>
              </div>
            );
          })}
      </SearchStyled>
    </div>
  );
}

const NavLinkHover = styled(NavLink)`
  &:hover {
    background-color: #f1f1f1;
  }
`;

const InputStyled = styled.input`
  border: none;
  background-color: #efefef;
  border-radius: 6px;
  padding: 7px 20px;
  outline: none;
  width: 270px;
`;

const AvatarStyled = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
`;

const SearchStyled = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
export default SearchUser;
