import { combineReducers } from 'redux'
import { CommentType } from '../type/commentType'
import { PostType, StatePostType } from '../type/postType'


const initialList : StatePostType = {
    listPost : []
}

const initialComment : {comments: CommentType[]} = {
    comments : []
}

type Action = {
    type: string,
    payload : PostType[] 
}

type ActionLoading = {
    type: string,
    payload : boolean
}

type ActionComment = {
    type: string,
    payload : CommentType[]
}

const post = (state : StatePostType = initialList, action: Action) => {
    switch (action.type) {
        case 'SET_LIST_TIMELINES_POST': {
            return {
                ...state,
                listPost: action.payload
            }
        }
        default: {
            return state
        }
    }
}

const loading = (state: {isLoading : boolean} = {isLoading : false}, action: ActionLoading) => {
    switch (action.type) {
        case 'SET_IS_LOADING' : {
            return {
                ...state,
                isLoading : action.payload
            }
        }
        default: {
            return state
        }
    }
}

const comment = (state: {comments : CommentType[]} = initialComment, action: ActionComment) => {
    switch (action.type) {
        case 'SET_COMMENT' : {
            return {
                ...state,
                comments : action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    post,
    loading,
    comment
})