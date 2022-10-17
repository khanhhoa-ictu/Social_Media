import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AccountSettingPage from "./page/AccCountSetting";
import HomePage from "./page/Home";
import InboxPage from "./page/Chat";
import ConfirmPage from "./page/ConfirmPassWord";
import ForgotPage from "./page/ForgotPassWord";
import LoginPage from "./page/login";
import RegisterPage from "./page/Register";
import NotFoundPage from "./page/NotFound";
import ProfileUserPage from "./page/Profile";

function App() {
  return (
    <div className="">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/account/setting" component={AccountSettingPage} />
          <Route
            path="/account/changepassword"
            component={AccountSettingPage}
          />
          <Route path="/account/help" component={AccountSettingPage} />
          <Route exact path="/inbox" component={InboxPage} />
          <Route exact path="/confirm/:id" component={ConfirmPage} />
          <Route exact path="/forgot" component={ForgotPage} />
          <Route exact path="/post/:id" component={HomePage} />
          <Route exact path="/profile/:id" component={ProfileUserPage} />
          <Route exact path="/:name" component={ProfileUserPage} />
          <Route exact path="/:id/follower" component={ProfileUserPage} />
          <Route exact path="/:id/following" component={ProfileUserPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
