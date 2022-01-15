import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function AccountSettingNavigation() {
    return (
        <div className='text-drak d-flex flex-column py-3'>
            <NavLink
                activeClassName='border-start border-dark h6 bg-light'
                to='setting'
                className='text-decoration-none py-3 text-dark w-100 px-3'>
                Chỉnh sửa trang cá nhân
            </NavLink>
            <NavLink
                activeClassName='border-start border-dark h6 bg-light'
                to='changepassword'
                className='text-decoration-none py-3 text-dark w-100 px-3'>
                Đổi mật khẩu
            </NavLink>
            <NavLink
                activeClassName='border-start border-dark h6 bg-light'
                to='help'
                className='text-decoration-none py-3 text-dark w-100 px-3'>
                Trợ giúp
            </NavLink>
        </div>
    )
}


export default AccountSettingNavigation

