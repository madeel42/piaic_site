import { combineReducers } from 'redux'
import auth from './auth'

import drawerReducer from './drawerReducer'
import ProfileReducer from './profileReducer'

export default combineReducers({
    auth,
    drawerReducer,
    ProfileReducer

});