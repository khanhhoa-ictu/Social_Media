import { combineReducers } from 'redux';
import {Forgot, StateUserType, UserType} from './../type/userType'

const initial = {
    user: {
        _id :'',
        email: '',
        name: '',
        address: '',
        phone_number: '',
        profilePicture: '',
        coverPicture: '',
        followers: [],
        followings: [],
        desc: '',
        gender: '',
    }
}

const initialForgot = {
    statusForgot: 'forgot'
}

type Action = {
    type: string,
    payload: UserType
}
const user = (state: StateUserType = initial, action: Action) => {
    switch (action.type) {
        case 'SET_USER': {
            return {
                user: action.payload,
            }
        }
        default: {
            return state
        }
    }
}
const forgotPassword = (state: Forgot = initialForgot, action: Action) => {
    switch (action.type) {
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