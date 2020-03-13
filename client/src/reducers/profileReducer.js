

const initialState = {
    profile: {},
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case 'GET_PROFILE':
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case 'PROFILE_ERROR':
            return {
                ...state,
                error: payload,
                loading: false
            }
        case 'CLEAR_PROFILE':
            return {
                ...state,
                profile: {},
                repos: [],
                loading: false
            }
        case "PROFILE_CREATED":
            return {
                ...state,
                profile: payload
            }


        default:
            return state;




    }
}