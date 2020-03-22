// import {COURSE_ACTION} from './allAction'
import * as allActionTypes from '../allTypes/allActionTypes';
export const courseAction = (data) => {
    return {
        type:allActionTypes.COURSE_ACTION,
        payload:data
    }
}
export const getCourseData = (data) => {
    return {
        type:allActionTypes.GET_COURSE_DATA,
         payload:data
    }
}