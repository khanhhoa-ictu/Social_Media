import { combineReducers } from 'redux'



const post = (state = {data: []}, action: { type: any; data: any }) => {
    switch (action.type) {
        case 'SET_POST': {
            return {
                ...state,
                data: action.data
            }
        }

        default: return state
    }
}
export default combineReducers({
    post, 
})