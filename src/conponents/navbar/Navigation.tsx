import React from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap'
import styled from 'styled-components'

interface Props {
    logout : () => void
}

function Navigation(props : Props) {
    const {logout} = props

    return (
        <NavigationStyled className="d-flex justify-content-center">
            <Navbar
                color="light"
                expand="md"
                light
                className='navigation'
            >
                <NavbarBrand href="/">
                    instagram
                </NavbarBrand>
                <div>
                    <Input type="text" placeholder="Search" />
                </div>
                <div>


                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink to="/"> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/inbox">Inbox </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Create">Create </NavLink>
                            </NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                  
                                    nav
                                >
                                    <div className="avatar">
                                        <img src='https://media.congluan.vn/files/dieulinh/2020/07/31/jisoo-2236.jpg' alt="" />
                                    </div>

                                </DropdownToggle>
                                <DropdownMenu end>
                                    <NavLink to='user'>  Trang cá nhân </NavLink>
                                    <NavLink to='setting'>  Cài đặt tài khoản </NavLink>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={logout}> Đăng Xuất </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </div>
            </Navbar>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.div`
    background-color:rgb(248,249,250);
    .navigation{
        width:70%;
        .avatar{
            width:50px;
            height:50px;
            img{
                width:100%;
                height:100%;
            border-radius:50%;
        }
    }
   

    }
`
export default Navigation
