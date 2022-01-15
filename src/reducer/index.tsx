import { combineReducers } from 'redux';

import FollowingReducer from './Following.reducer';
import HomeReducer from './Home.reducer';
import LoginReducer from './Login.reducer';
import UserReducer from './User.reducer';

const rootReducer = combineReducers ({
    FollowingReducer,
    HomeReducer,
    UserReducer,
    LoginReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>