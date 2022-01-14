import { combineReducers } from 'redux'
import { FollowingsType, SateFollowingsType } from '../type/folloingType'

const initialList = {
    followings : []
}

type Action = {
    type: string,
    payload: FollowingsType[]
}

const following = (state : SateFollowingsType = initialList, action: Action) => {
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