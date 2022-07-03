import {applyMiddleware, combineReducers, createStore} from "redux";
import {cryptoReducer} from "../reducers/cryptoReducer";
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
    crypto: cryptoReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));