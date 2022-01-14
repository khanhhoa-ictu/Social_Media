import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountSettingPage from './page/AccountSettingPage';
import HomePage from './page/HomePage';

import './App.css'
import LoginPage from './page/login/LoginPage';
import RegisterPage from './page/login/RegisterPage';
import ForgotPage from './page/login/ForgotPage';
import ConfirmPage from './page/login/ConfirmPage'
import InboxPage from './page/InBoxPage';
import PostDetailPage from './page/post/PostDetailPage';
import styled from 'styled-components';


function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/account/setting" component={AccountSettingPage} />
          <Route path="/account/changepassword" component={AccountSettingPage} />
          <Route path="/account/help" component={AccountSettingPage} />
          <Route exact path="/inbox" component={InboxPage} />
          <Route exact path="/confirm/:id" component={ConfirmPage} />
          <Route exact path="/forgot" component={ForgotPage} />
          <Route exact path='/post/:id' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
