import { combineReducers } from "redux";
import {pubReducer} from "./publicationReducer"
import authReducer from './authReducer'

export const rootReducer = combineReducers({
    pubReducer,auth: authReducer
})