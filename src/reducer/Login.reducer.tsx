import { combineReducers } from 'redux';

const initial = {
    isLogin: false
}
type Action = {
    type: string,
    payload: any
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