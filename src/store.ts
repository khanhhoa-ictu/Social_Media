import thunk from "redux-thunk";
import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducer";
const middleware = [thunk];

export const store = createStore(reducer, applyMiddleware(...middleware));
