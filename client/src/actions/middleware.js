import {openDrawer} from './drawer'
class Middleware {
    static drawer =(data) => {
        return dispatch => {
            dispatch(openDrawer(data))
        }
    }
}
export default Middleware