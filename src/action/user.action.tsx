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

export const sentEmail = () => ({
    type: 'FORGOT_SENT_EMAIL',
});

export const auth = () => async(dispatch:any) => {
    let user ;
    console.log('object');
    const local = localStorage.getItem("user")
    if (typeof local === "string") {
        user =  JSON.parse(local)
    }else{
        dispatch(loginFail);
        return false
    }
    console.log('user.token',user.token) 
    console.log(user.email) 
    try {
       let res = await axios.post('http://localhost:8080/auth',{
            email: user.email,
            token : user.token
        })
       console.log(res);
    } catch (error) {
        console.log(error);
        dispatch(loginFail);
        return false
    }
    dispatch(loginSuccess);
    return true
   
}
  