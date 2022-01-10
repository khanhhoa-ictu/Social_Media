import React from 'react'
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import AccountSettingDetail from '../conponents/account-setting/AccountSettingDetail'
import AccountSettingNavigation from '../conponents/account-setting/AccountSettingNavigation'
import Help from '../conponents/account-setting/Help'
import ChangePassword from '../conponents/account-setting/ChangePassword'
import Navigation from '../conponents/navbar/Navigation'

function AccountSettingPage() {
    return (
        <div>
            <Navigation/>
            <div className='container d-flex border rounded mt-5'>
                <AccountSettingNavigation /> 
                <div>
                    <Route exact path="/account/help" component={()=><Help/>} />
                    <Route exact path="/account/changepassword" component={()=><ChangePassword/>} />
                    <Route exact path="/account/setting" component={() => <AccountSettingDetail/>} />
                </div>
            </div>
         

        </div>
    )
}

export default AccountSettingPage
