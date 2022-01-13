import { combineReducers } from 'redux'
const following = (state  = [], action: any) => {
    switch (action.type) {
        case 'SET_FOLLOWING': {
            return {
                ...state,
                followings: action.payload
            }
        }
        default: return state
    }
}

export default combineReducers({
    following, 
})