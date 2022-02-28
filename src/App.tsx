import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
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
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Social_Media/register" component={RegisterPage} />
          <Route exact path="/Social_Media/login" component={LoginPage} />
          <Route path="/Social_Media/account/setting" component={AccountSettingPage} />
          <Route path="/Social_Media/account/changepassword" component={AccountSettingPage} />
          <Route path="/Social_Media/account/help" component={AccountSettingPage} />
          <Route exact path="/Social_Media/inbox" component={InboxPage} />
          <Route exact path="/Social_Media/confirm/:id" component={ConfirmPage} />
          <Route exact path="/Social_Media/forgot" component={ForgotPage} />
          <Route exact path='/Social_Media/post/:id' component={HomePage} />
          <Route exact path='/Social_Media/profile/:id' component={ProfileUserPage} />
          <Route exact path="/Social_Media/:name" component={ProfileUserPage} />
          <Route exact path="/Social_Media/:id/follower" component={ProfileUserPage} />
          <Route exact path="/Social_Media/:id/following" component={ProfileUserPage} />

          <Route component={NotFoundPage} />

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
