import { combineReducers } from 'redux'
import auth from './auth'
import post from './postReducer'
import drawerReducer from './drawerReducer'
import ProfileReducer from './profileReducer'

export default combineReducers({
    auth,
    drawerReducer,
    ProfileReducer,
    post


});