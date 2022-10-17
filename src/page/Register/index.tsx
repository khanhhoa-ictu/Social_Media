import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, loginFail } from "../../action/user.action";
import { registerUser } from "../../api/user.api";
import RegisterComponents from "./RegisterComponent";
import { RootState } from "../../reducer";

function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordConfirm, setPassWordConfirm] = useState("");
  const [notificationEmail, setNotificationEmail] = useState("");
  const [notificationUserName, setNotificationUserName] = useState("");
  const [notificationPassWord, setNotificationPassWord] = useState("");
  const [notificationPassWordConfirm, setNotificationPassWordConfirm] =
    useState("");

  const registerButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setNotificationEmail("Email is required");
      return;
    } else {
      setNotificationEmail("");
    }
    if (!userName) {
      setNotificationUserName("UserName is required");
      return;
    } else {
      setNotificationUserName("");
    }
    if (!passWord) {
      setNotificationPassWord("PassWord is required");
      return;
    } else {
      setNotificationPassWord("");
    }
    if (!passWordConfirm) {
      setNotificationPassWordConfirm("PassWord Confirm is required");
      return;
    } else {
      setNotificationPassWordConfirm("");
    }
    if (passWord === passWordConfirm) {
      setNotificationPassWordConfirm("");
    } else {
      setNotificationPassWordConfirm("PassWord Confirm is different Password");
      return;
    }

    registerUser(email, passWord, userName)
      .then((data) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        if (err.response.data.msg === "Email already exist") {
          setNotificationEmail("Email đã tồn tại");
        }
      });
  };

  const loginButton = () => {
    dispatch(loginFail());
    history.push("/login");
  };
  let isLogin = useSelector(
    (state: RootState) => state.LoginReducer.login.isLogin
  );

  useEffect(() => {
    const Authentication = async () => {
      let res = await dispatch(auth());
      if (!!res) {
        history.push("/");
      }
    };
    Authentication();
  }, [isLogin]);
  return (
    <div>
      <RegisterComponents
        email={email}
        userName={userName}
        passWord={passWord}
        passWordConfirm={passWordConfirm}
        notificationEmail={notificationEmail}
        notificationUserName={notificationUserName}
        notificationPassWord={notificationPassWord}
        notificationPassWordConfirm={notificationPassWordConfirm}
        setEmail={setEmail}
        setUserName={setUserName}
        setPassWord={setPassWord}
        setPassWordConfirm={setPassWordConfirm}
        registerButton={registerButton}
        loginButton={loginButton}
      />
    </div>
  );
}

export default RegisterPage;
