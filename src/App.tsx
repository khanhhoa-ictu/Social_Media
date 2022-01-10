import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountSettingPage from './page/AccountSettingPage';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

function App() {
  return (
    <div className=''>
         <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route  path="/account/setting" component={AccountSettingPage} />
        <Route  path="/account/changepassword" component={AccountSettingPage} />
        <Route  path="/account/help" component={AccountSettingPage} />

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
