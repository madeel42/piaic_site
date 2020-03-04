
// let checkProfile = { userDrawer: false };

// export default function openDrawer(oldData = checkProfile, newData) {
//     let newStore = JSON.parse(JSON.stringify(oldData));
//     if (newData.type == "PROFILE_CLICKED") {
//         newStore.userDrawer = newData.data;
//     }
//     return newStore;
// }

export const openDrawer = () => dispatch => {
    try {
        dispatch({
            type: 'PROFILE_CLICKED',
            payload: true

        })
    } catch (error) {
        console.error(error.message)
    }

}

export const closeDrawer = () => dispatch => {
    try {
        dispatch({
            type: 'PROFILE_CLOSED',
            payload: false
        })
    } catch (err) {

        console.error(err.message)

    }

}