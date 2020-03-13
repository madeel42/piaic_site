
import axios from 'axios';
import { loadUser } from './auth'


// gET The currrent user profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios('/api/profile/me');

        dispatch({
            type: 'GET_PROFILE',
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: 'PROFILE_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        })

    }
}
export const createProfile = (formData, edit = false, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.get('api/profile', config, formData)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data
        })
        // dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created','success'));
        // if (!edit) {
        //     history.push('/dashboard');
        // }


    } catch (err) {

        console.error(err.message)

        dispatch({
            type: 'PROFILE_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }

}
export const profileRegister = ({ userName, city, gender, program, image }) => async dispatch => {

    const body = { userName, city, gender, program, image };
    try {
        let fd = new FormData();

        for (var item in body) {
            fd.append(item, body[item]);
        }
        const res = await axios.post('/api/profile', fd)
        dispatch({
            type: 'PROFILE_CREATED',
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        console.log(err.message)
        dispatch({
            type: 'REGISTER_FAIL'
        });

    }

}