import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function AccountSettingNavigation() {
    return (
        <div>
            <div className='px-3'>
                <Ul className='text-drak'>
                    <li><NavLink to='setting' className='font-14'>Chỉnh sửa trang cá nhân </NavLink></li>
                    <li><NavLink to='changepassword' className='font-14'>Đổi mật khẩu </NavLink></li>
                    <li><NavLink to='help' className='font-14'>Trợ giúp </NavLink></li>
                </Ul>

            </div>
        </div>
    )
}

const Ul = styled.ul`
    padding: 20px 0;
    list-style: none;
    li{
        padding: 10px 0;
        a{
            text-decoration: none;
            color: rgba(var(--i1d,38,38,38),1);
            border-left: 2px solid transparent;
            font-size: 16px;
            height: inherit;
            line-height: 20px;
            padding: 16px 16px 16px 0;
            
        }
    }
`



export default AccountSettingNavigation

