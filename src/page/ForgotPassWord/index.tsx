import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  changePassword,
  checkOTP,
  loginFail,
  sentEmail,
} from "../../action/user.action";
import Forgot from "../../conponents/forgotpassword/Forgot";
import CheckOTP from "../../conponents/forgotpassword/CheckOTP";
import NewPassword from "../../conponents/forgotpassword/NewPassword";
import {
  forgotPassword,
  requestForgotPassword,
  verifyForgotPassword,
} from "../../api/user.api";
import { RootState } from "../../reducer";
function ForgotPassWord() {
  const history = useHistory();
  const dispatch = useDispatch();

  let statusForgot = useSelector(
    (state: RootState) => state.UserReducer.forgotPassword.statusForgot
  );

  const [loading, setLoading] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notificationEmail, setNotificationEmail] = useState("");
  const [notificationCode, setNotificationCode] = useState("");
  const [notificationNewPassword, setNotificationNewPassword] = useState("");
  const [notificationConfirmPassword, setNotificationConfirmPassword] =
    useState("");

  const getCodeButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setNotificationEmail("Email không được để trống");
      return;
    } else {
      setNotificationEmail("");
    }
    requestForgotPassword(email)
      .then((data) => {
        dispatch(checkOTP());
      })
      .catch((err) => console.log(err));
  };

  const checkCodeButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!code) {
      setNotificationCode("Chưa nhập mã OTP");
      return;
    } else {
      setNotificationCode("");
    }
    verifyForgotPassword(email, code)
      .then((data) => {
        dispatch(changePassword());
      })
      .catch((err) => console.log(err));
  };

  const changePasswordButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newPassword) {
      setNotificationNewPassword("Mật khẩu mới không được để trống");
      return;
    } else {
      setNotificationNewPassword("");
    }
    if (!confirmPassword) {
      setNotificationConfirmPassword("Mật khẩu xác nhận không được để trống");
      return;
    } else {
      setNotificationConfirmPassword("");
    }
    if (newPassword === confirmPassword) {
      setNotificationConfirmPassword("");
    } else {
      setNotificationConfirmPassword(
        "Mật khẩu xác nhận không khớp với mật khẩu mới"
      );
      return;
    }
    forgotPassword(email, code, newPassword)
      .then((data) => {
        dispatch(sentEmail());
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const loginButton = () => {
    dispatch(loginFail());
    dispatch(sentEmail());
    history.goBack();
  };

  useEffect(() => {
    setLoading("");
  }, [statusForgot]);

  return (
    <div>
      {statusForgot === "forgot" ? (
        <Forgot
          email={email}
          notificationEmail={notificationEmail}
          setEmail={setEmail}
          getCodeButton={getCodeButton}
          loginButton={loginButton}
        />
      ) : statusForgot === "checkOTP" ? (
        <CheckOTP
          code={code}
          setCode={setCode}
          notificationCode={notificationCode}
          checkCodeButton={checkCodeButton}
        />
      ) : statusForgot === "changePassword" ? (
        <NewPassword
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          notificationNewPassword={notificationNewPassword}
          notificationConfirmPassword={notificationConfirmPassword}
          setNewPassword={setNewPassword}
          setConfirmPassword={setConfirmPassword}
          changePasswordButton={changePasswordButton}
          loginButton={loginButton}
        />
      ) : null}
    </div>
  );
}

export default ForgotPassWord;
