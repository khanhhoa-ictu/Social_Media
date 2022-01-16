import React from 'react'
import { NavLink } from 'react-router-dom'

function AccountSettingNavigation() {
    return (
        <div className='text-drak d-flex flex-column py-3'>
            <NavLink
                activeClassName='border-start border-dark h6 mb-0 bg-light'
                to='setting'
                className='text-decoration-none py-3 text-dark w-100 px-3 font-14'>
                Chỉnh sửa trang cá nhân
            </NavLink>
            <NavLink
                activeClassName='border-start border-dark h6 mb-0 bg-light'
                to='changepassword'
                className='text-decoration-none py-3 text-dark w-100 px-3 font-14'>
                Đổi mật khẩu
            </NavLink>
            <NavLink
                activeClassName='border-start border-dark h6 mb-0 bg-light'
                to='help'
                className='text-decoration-none py-3 text-dark w-100 px-3 font-14'>
                Trợ giúp
            </NavLink>
        </div>
    )
}


export default AccountSettingNavigation

