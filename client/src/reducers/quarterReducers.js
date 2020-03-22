import  * as actionTypes from './../actions/allTypes/allActionTypes'
let initialData = {
    getQuarterData : []
}
export const getQuarter = (state=initialData,action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionTypes.GET_QUARTER_DATA:
            return {
                getQuarterData:[...action.payload]
            }
    }
    return newState;
}