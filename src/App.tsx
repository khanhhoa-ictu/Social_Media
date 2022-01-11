import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './page/HomePage';

import './App.css'
import LoginPage from './page/login/LoginPage';
import RegisterPage from './page/login/RegisterPage';
import ForgotPage from './page/login/ForgotPage';
import FooterPage from './page/FooterPage';
import ConfirmPage from './page/login/ConfirmPage'
import SettingPage from './page/SettingPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/confirm/:id" component={ConfirmPage} />
        <Route exact path="/forgot" component={ForgotPage} />
        <Route  path="/account/setting" component={SettingPage} />
        <Route  path="/account/changepassword" component={SettingPage} />
        <Route  path="/account/setting" component={SettingPage} />
        
      </Switch>
      <FooterPage /> 
    </BrowserRouter>
  );
}

export default App;
