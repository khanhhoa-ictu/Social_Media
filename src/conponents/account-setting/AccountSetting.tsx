import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from '../navbar/Navigation'
import AccountSettingDetail from './AccountSettingDetail'
import AccountSettingNavigation from './AccountSettingNavigation'
import Help from './Help'
import ChangePassword from './ChangePassword'


function AccountSetting() {
    return (
   <BrowserRouter>
        <div>
            {/* <Navigation />
            <div className='d-flex'>
                <AccountSettingNavigation />

            <Switch>
                <Route  path="/account/ChangePassword" component={ChangePassword} />
                <Route  path="/account/AccountSettingDetail" render={() => (<AccountSettingDetail/>)} />
                <Route  path="/account/Help" component={Help}/>
            </Switch>
            </div> */}
        </div>
   </BrowserRouter>
    )
}

export default AccountSetting
