import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setUser } from '../../action/user.action'
import { getUser } from '../../api/user.api'
import { getEmail } from '../../config/locastorga.config'
import avatar from './../../assets/image/no-avatar.png'

interface Props {
    user: any,
}
function HeaderProfile(props: Props) {
    const { user } = props
    const dispatch = useDispatch()
    let email = getEmail()?.email;

    useEffect(() => {
        getUser(email).then(user => {
            dispatch(setUser(user))
        })
    }, [])

    console.log(user)
    return (
        <DivHeader className='d-flex'>

            <div className='col-4 '>
                {user.coverPicture === ''
                    ? <img className='img__header-profile' src={avatar} alt='avatar' />
                    : <img src={user.coverPicture} alt='avatar' />
                }

            </div>
            <div className='col-8'>
                <div className='d-flex name__profile'>
                    <h1>{user.name}</h1>
                    <button className=' font-14'>Chỉnh sửa trang cá nhân</button>
                    <svg aria-label="Tùy chọn" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <div className='d-flex flowing'>
                    <p>23 bài viết</p>
                    <p>{user.followers.length} người theo dõi</p>
                    <p>Đang theo dõi {user.followings.length} người dùng</p>
                </div>
            </div>

        </DivHeader>
    )
}

const DivHeader = styled.div`
    margin-top:85px;
    .img__header-profile{
        width:130px;
        height:130px;
        margin-left: 45px;
    }
    .name__profile{
        h1{
            font-size:28px;
            font-weight: 300;
            line-height: 32px;
        }
        button{
            margin-left: 20px;
            border: 1px solid rgba(var(--ca6,219,219,219),1);
            color: rgba(var(--f75,38,38,38),1);
            border-radius: 4px;
            font-weight: 600;
            padding: 5px 9px;
            text-align: center;
            text-overflow: ellipsis;
            background-color: transparent;
            height: 35px;
        }
        svg{
            margin-left: 20px;
            margin-top: 4px;
        }
    }
    .flowing{
        margin-top: 15px;
        p{
            margin: 0 20px 0 0;
        }
    }
`
export default HeaderProfile
