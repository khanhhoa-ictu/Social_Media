import axios from "axios";
import { Dispatch } from "react";
import { verifyAuth } from "../api/user.api";
import { dispatchLogin } from "../reducer/Login.reducer";

export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
    data: ''
});

export const loginFail = () => ({
    type: 'LOGIN_FAIL',
    data: ''
});

export const checkOTP = () => ({
    type: 'FORGOT_CHECK_OTP',
    data: ''
});

export const changePassword = () => ({
    type: 'FORGOT_CHANGE_PASSWORD',
    data: ''
});
export const setUser = (user:any) =>({
  type: 'SET_USER',
  payload:user
})
export const sentEmail = () => ({
    type: 'FORGOT_SENT_EMAIL',
    data: ''
});

export const auth = () => async (dispatch: Dispatch<dispatchLogin>) => {
    let user ;
    const local = localStorage.getItem("user")
    if (typeof local === "string") {
        user =  JSON.parse(local)
    }else{
        dispatch(loginFail());
        return false
    }
    await verifyAuth(user.email, user.token)
    .then((data) => {
        dispatch(loginSuccess());
        return true
    })
    .catch((err) => {
        dispatch(loginFail());
        return false
    })

}
  