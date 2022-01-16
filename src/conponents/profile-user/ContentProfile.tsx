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
    const [showDetailPost, setShowDetailPost] = useState(false)


    return (
        <Content__Profile className='Content__Profile'>
            <Nav className='border-top border-bottom-0 justify-content-center ml-5 mt-5 mb-1 nav' variant="tabs">
                <Nav>
                    <Nav href="" className='navlink font-14 mt-2' style={{ color: "#262626", fontSize: "18px" }}>
                        BÀI VIẾT
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
                                className="image-post img-fluid"
                                onClick={() => setShowDetailPost(true)}
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
    @media (max-width: 992px){
        grid-gap: 12px 12px;
    }
    .image-post{
        min-width:100%;
        height: 283px;
        display:block;
        position:relative;
        @media (max-width: 992px){
            height: 224px;
        }
        @media (max-width: 768px){
            height: 164px;
        }
        @media (max-width: 576px){
            height: 122px;
        }
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
}
.navlink{
    color: #262626;
}
`

export default ContentProfile
