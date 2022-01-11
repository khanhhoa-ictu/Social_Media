import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import AccountSettingPage from './page/AccountSettingPage';
=======

>>>>>>> 13f229c6945ac92c8fa7985ec10bd2d498ec19f3
import HomePage from './page/HomePage';

import './App.css'
import LoginPage from './page/login/LoginPage';
import RegisterPage from './page/login/RegisterPage';
import ForgotPage from './page/login/ForgotPage';
import FooterPage from './page/FooterPage';
import ConfirmPage from './page/login/ConfirmPage'


function App() {
  return (
    <div className=''>
         <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
<<<<<<< HEAD
        <Route  path="/account/setting" component={AccountSettingPage} />
        <Route  path="/account/changepassword" component={AccountSettingPage} />
        <Route  path="/account/help" component={AccountSettingPage} />

=======
        <Route exact path="/confirm/:id" component={ConfirmPage} />
        <Route exact path="/forgot" component={ForgotPage} />
>>>>>>> 13f229c6945ac92c8fa7985ec10bd2d498ec19f3
      </Switch>
      <FooterPage /> 
    </BrowserRouter>
    </div>
  );
}

export default App;
