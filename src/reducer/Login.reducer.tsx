import { combineReducers } from 'redux';
export interface dispatchLogin{
    type: string,
    data: string
}

const initial = {
    isLogin: false
}
type Action = {
    type: string,
    payload: string
}
const login = (state = initial, action: Action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                isLogin: true
            }
        }
        case 'LOGIN_FAIL': {
            return {
                ...state,
                isLogin: false
            }
        }
        default: {
            return state
        }
    }
}
export default combineReducers({
    login,
})