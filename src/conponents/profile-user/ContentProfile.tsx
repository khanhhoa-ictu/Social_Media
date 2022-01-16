import React, { useState } from 'react'
import { Navbar, Nav } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { CardImg } from 'reactstrap';
import styled from 'styled-components';
import PostDetail from '../post/PostDetail';
import { PostType } from '../../type/postType';

interface Props {
    post: PostType[]
}
function ContentProfile(props: Props) {
    const { post } = props


    return (
        <Content__Profile className='Content__Profile'>
            <Nav className='border-top border-bottom-0 justify-content-center ml-5 mt-5 mb-1 nav' variant="tabs">
                <Nav>
                    <Nav href="" className='navlink mt-2' style={{ color: "#262626", fontSize: "18px" }}>
                        Bài viết
                    </Nav>
                </Nav>
            </Nav>
            <div className='list-img'>
                {
                    post.map((item, key) => {
                        return <NavLink to={`/profile/${item._id}`} className='img-item' key={key}>
                            <ImgStyle

                                alt="Card image cap"
                                src={item.img}
                                className="image-post"
                            />
                            <div className="img-box">

                            </div>
                        </NavLink>
                    })
                }
            </div>

        </Content__Profile>
    )
}
const ImgStyle = styled(CardImg)`
object-fit: cover;
`
const Content__Profile = styled.div`
.list-img{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px 30px;
    overflow:hidden;
    .image-post{
        width:100%;
        height:300px;
        display:block;
        position:relative;
    }
    .img-item{
        position:relative;
        cursor: pointer;
        border-radius:3px;
        .img-box{
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-color:#000;
            opacity:0;
            transition: opacity ease-in-out 0.3s;

            &:hover{
                opacity:0.4;
                transition: opacity ease-in-out 0.3s;
                border-radius: 4px;
            }
        }           
    }
}

.nav{
    height:52px;
    color: #262626;
    .navlink{
        
    }
}
.navlink{
    color: #262626;
}
`

export default ContentProfile
