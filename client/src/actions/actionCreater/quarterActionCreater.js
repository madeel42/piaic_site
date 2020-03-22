import * as allActionTypes from '../allTypes/allActionTypes';
export const getQuarterData = (data) => {
    return {
         type:allActionTypes.GET_QUARTER_DATA,
         payload:data
    }
}