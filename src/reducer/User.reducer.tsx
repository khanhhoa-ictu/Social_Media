import { combineReducers } from 'redux';
import {UserType} from './../type/userType'


export interface State {
    user: UserType
}

const initial = {
    user: {
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

export interface forgot {
    statusForgot: string
}

const initialForgot = {
    statusForgot: 'forgot'
}

type Action = {
    type: string,
    payload: any
}
const user = (state: State = initial, action: Action) => {
    switch (action.type) {
        // case 'GET_USER': {
        //     return {
        //         ...state,
        //         user: action.payload
        //     }
        // }
        case 'SET_USER': {
            return {
                state: action.payload,
            }
        }
        default: {
            return state
        }
    }
}
const forgotPassword = (state: forgot = initialForgot, action: Action) => {
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