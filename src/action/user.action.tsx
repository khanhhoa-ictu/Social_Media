import axios from "axios";

export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
});

export const loginFail = () => ({
    type: 'LOGIN_FAIL',
});

export const checkOTP = () => ({
    type: 'FORGOT_CHECK_OTP',
});

export const changePassword = () => ({
    type: 'FORGOT_CHANGE_PASSWORD',
});
export const setUser = (user:any) =>({
  type: 'SET_USER',
  payload:user
})
export const sentEmail = () => ({
    type: 'FORGOT_SENT_EMAIL',
});
const getUser = () => {
    if(localStorage.getItem('user') === null)
        return null
    return JSON.parse(localStorage.getItem('user') || '{}')
}
export const auth = () => async(dispatch:any) => {
    let user 
    if (getUser() === null) {
        dispatch(loginFail());
        return false;
      }else{
        user = getUser();
      }
      let email = user.email;
      let token = user.token;
    
      try {
        await axios.post("http://localhost:8080/auth", {
          email: email,
          token: token,
        });
      } catch (err) {
        dispatch(loginFail());
        return false;
      }
      dispatch(loginSuccess());
      return true;
   
}
  