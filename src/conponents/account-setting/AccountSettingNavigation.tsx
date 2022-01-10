import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function AccountSettingNavigation() {
    return (
        <div>
            <section>
                <main>
                    <div className='container'>
                        <Ul className='text-drak'>
                            <li><NavLink to='setting'>Chỉnh sửa trang cá nhân </NavLink></li>
                            <li><NavLink to='changepassword'>Đổi mật khẩu </NavLink></li>
                            <li><NavLink to='help'>Trợ giúp </NavLink></li>
                        </Ul>
                        
                    </div>
                </main>

            </section>
        </div>
    )
}

const Ul = styled.ul`
list-style: none;
li{
    a{
        text-decoration: none;
        color: rgba(var(--i1d,38,38,38),1);
        border-left: 2px solid transparent;
        display: block;
        font-size: 16px;
        height: inherit;
        line-height: 20px;
        padding: 16px 16px 16px 30px;
        
    }
}
`



export default AccountSettingNavigation

