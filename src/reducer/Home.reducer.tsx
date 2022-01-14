import { combineReducers } from 'redux'
import { PostType, StatePostType } from '../type/postType'


const initialList = {
    listPost : [],
    isLoading : false
}

type Action = {
    type: string,
    payload: PostType[]
}

const post = (state : StatePostType = initialList, action: Action) => {
    switch (action.type) {
        case 'SET_LIST_TIMELINES_POST': {
            return {
                ...state,
                listPost: action.payload
            }
        }
        case 'SET_IS_LOADING' : {
            return {
                ...state,
                isLoading : action.payload
            }
        }
        case 'SET_COMMENT' : {
            return {
                ...state,
                comments : action.payload
            }
        }
        default: return state
    }
}
export default combineReducers({
    post, 
})