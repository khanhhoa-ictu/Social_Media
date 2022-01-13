import { combineReducers } from 'redux';
import FollowingReducer from './Following.reducer';

import HomeReducer from './Home.reducer';
import LoginReducer from './Login.reducer';
import UserReducer from './User.reducer';

export default combineReducers ({
    HomeReducer,
    LoginReducer,
    UserReducer,
    FollowingReducer,
})
