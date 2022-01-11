import { combineReducers } from 'redux';

export interface User {
    userName : string,
    passWord : string,
    token : string,
    id : string,
    email : string
}

export interface State {
    user : User
}

const initial = {
    user : {
        userName : '',
        passWord : '',
        token : '',
        id : '',
        email : ''
    }
}

export interface forgot {
    statusForgot : string
}

const initialForgot = {
    statusForgot : 'forgot'
}

type Action = {
    type: string,
    payload: any
}
const user = (state : State = initial, action: Action) => {
    switch(action.type) {
        case 'GET_USER': {
            return {
                ...state,
                user: action.payload
            }
        }
        default: {
            return state
        }
    }
}
const forgotPassword = (state : forgot = initialForgot, action: Action) => {
    switch(action.type) {
        case 'FORGOT_CHECK_OTP': {
            return {
                ...state,
                statusForgot: 'checkOTP'
            }
        }
        case 'FORGOT_CHANGE_PASSWORD': {
            return {
                ...state,
                statusForgot: 'changePassword'
            }
        }
        case 'FORGOT_SENT_EMAIL': {
            return {
                ...state,
                statusForgot: 'forgot'
            }
        }
        default: return state
    }
}
export default combineReducers({
    user,
    forgotPassword,
})