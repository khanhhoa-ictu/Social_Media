import React from "react";
import { NavbarBrand } from "reactstrap";
import styled from "styled-components";
import logoIcon from "../../assets/image/logo-icon.png";
import logo from "../../assets/image/logo.png";
function Logo() {
  return (
    <div>
      <NavbarBrand href="/" className="d-none d-sm-block">
        <LogoImageStyled src={logo} alt="logo" />
      </NavbarBrand>
      <NavbarBrand href="/" className="d-block d-sm-none">
        <LogoImageStyled src={logoIcon} alt="logo" />
      </NavbarBrand>
    </div>
  );
}
const LogoImageStyled = styled.img`
  height: 28px;
`;
export default Logo;
