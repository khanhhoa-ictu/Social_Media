import { combineReducers } from 'redux';

import HomeReducer from './Home.reducer';
import LoginReducer from './Login.reducer';
import UserReducer from './User.reducer';

export default combineReducers ({
    HomeReducer,
    LoginReducer,
    UserReducer
})
