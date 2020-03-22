import  * as allActionTypes from '../allTypes/allActionTypes'
export const getTopicAction = (data) => {
    return {
        type:allActionTypes.GET_TOPIC_DATA,
        data
    }
}