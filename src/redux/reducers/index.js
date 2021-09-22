import { combineReducers } from "redux";
import {pubReducer} from "./publicationReducer"
import authReducer from './authReducer'
import {UserRegisterReducer} from './registerUserReducer'
import {usersReducer} from './usersReducers'
import {ExpertRegisterReducer} from './registerExpertReducer'
import {expertsReducer} from './expertReducer'
import {rdvReducer} from './RdvReducer'
import {contactReducer} from './contactReducer'

export const rootReducer = combineReducers({
    pubReducer,auth: authReducer,
    user : UserRegisterReducer,
    users: usersReducer,
    expert:ExpertRegisterReducer,
    experts:expertsReducer,
    rdv:rdvReducer ,
    contact : contactReducer
})