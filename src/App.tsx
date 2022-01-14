import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import AccountSettingPage from './page/AccountSettingPage';
import HomePage from './page/HomePage';
import InboxPage from './page/InBoxPage';
import ConfirmPage from './page/login/ConfirmPage';
import ForgotPage from './page/login/ForgotPage';
import LoginPage from './page/login/LoginPage';
import RegisterPage from './page/login/RegisterPage';
import NotFoundPage from './page/NotFoundPage';
import ProfileUserPage from './page/ProfileUserPage';




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
          <Route exact path="/user" component={ProfileUserPage} />
          <Route component={NotFoundPage} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
