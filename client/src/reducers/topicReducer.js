import * as allActionTypes from '../actions/allTypes/allActionTypes'
let initialData = {
    topicData  : []
}
export const topicReducer = (state = initialData,action) => {
    let newState  = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case allActionTypes.GET_TOPIC_DATA:
            return {
                ...state,
                topicData:action.data
            }

    }
    return state
}