// import {COURSE_ACTION} from './../allAction'
import * as actionTypes from './../actions/allTypes/allActionTypes'
let initialData = {
    // courseData: [],
    getCourseData:[]
}
export const courseReducers = (state = initialData, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        // case 'persist/REHYDRATE':
        //     if (action.payload) {
        //         newState = action.payload.courseReducers;
        //     }
        //     break;
        case actionTypes.COURSE_ACTION:
            // return {
            //     ...state,
            //     courseData:[...state.courseData,{...action.payload}]
            // }
            break;
            case actionTypes.GET_COURSE_DATA:
                return {
                    // ...state.getCourseData,
                    getCourseData : [...action.payload]

                }
                
            // return {
            //     ...newState,
            //     data: action.payload
            // }
    }
    return newState;
}
