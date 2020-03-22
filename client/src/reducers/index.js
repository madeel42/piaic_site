import { combineReducers } from 'redux'
import auth from './auth'
import post from './postReducer'
import {getQuarter} from './quarterReducers';
import {courseReducers} from './courseReducers';
import {topicReducer} from './topicReducer'
import drawerReducer from './drawerReducer'
import ProfileReducer from './profileReducer'

export default combineReducers({
    auth,
    drawerReducer,
    ProfileReducer,
    post,
    getQuarter,
    courseReducers,
    topicReducer


});