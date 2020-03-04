
const initialState = {
    userDrawer: false,
    
}

export default function Drawer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case 'PROFILE_CLICKED':
            return {
                ...state,
                userDrawer: payload
            }
        case "PROFILE_CLOSED":
            return {
                ...state,
                userDrawer: payload,
                
            }
        default:
            return state
    }
}












// const initialState = {
//     data:true

// }
// export default function (state = initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case 'PROFILE_CLOSED':
//             return{
//                 ...state,
//                 ...payload
//             }

//             default:
//                 return state
//     }

// }