import React, { useState } from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { CardImg } from 'reactstrap';
import styled from 'styled-components';
import PostDetail from '../post/PostDetail';


function ContentProfile() {
    const [showDetailPost, setShowDetailPost] = useState(false)


    return (
        <Content__Profile className='Content__Profile'>
            <Nav className='border-top border-bottom-0 justify-content-center ml-5 mt-5 mb-1 nav' variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="" className='navlink' style={{ color: "#262626", fontSize: "18px" }}>
                        Bài viết
                    </Nav.Link>
                </Nav.Item>


            </Nav>
            <div className='list-img'>

                <div className=' doc'>
                    <ImgStyle
                        alt="Card image cap"
                        src="https://picsum.photos/256/186"
                        onClick={() => setShowDetailPost(true)}

                    />
                    <div className='links'>
                        <NavLink to=""> <i className="fa fa-heart"></i></NavLink>
                        <NavLink to=""><i className="fa fa-comment"></i></NavLink>
                    </div>
                </div>

                <ImgStyle
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    onClick={() => setShowDetailPost(true)}
                />
                <ImgStyle
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    onClick={() => setShowDetailPost(true)}
                />
                <ImgStyle
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    onClick={() => setShowDetailPost(true)}
                />
                <ImgStyle
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    onClick={() => setShowDetailPost(true)}
                />
                <ImgStyle
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    onClick={() => setShowDetailPost(true)}
                />
                <ImgStyle
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    onClick={() => setShowDetailPost(true)}
                />
                <ImgStyle
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    onClick={() => setShowDetailPost(true)}
                />
            </div>

            {showDetailPost ? <PostDetail showDetailPost={showDetailPost} setShowDetailPost={setShowDetailPost} /> : null}
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

    .doc{
        
        &:before{
            content:"";
            transition:.3s;
            position:absolute;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,0);
          }
         
          &:hover{
            
            &:before{
              opacity:1;
              background-color:rgba(0,0,0,.5);
            }
            .links{
              opacity:1;
            }
          }  
        
          

          
          .links{
            text-align:center;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            overflow:hidden;
            opacity:0;
            transition:.2s;


            a{
                color:#FFF;
                position:relative;
                text-decoration:none;

                i{
                    font-size:35px;
                    margin:0 auto;
                    position:relative;
                    padding:15px;
                }
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
