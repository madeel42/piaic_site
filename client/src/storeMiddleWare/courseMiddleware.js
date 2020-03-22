// import { courseAction } from './../actionCreater'
import * as actionCreater from './../actions/actionCreater/courseActionCreater';
class middleWare {
  static courseMiddleware(data) {
    return dispatch => {
      // dispatch(courseAction(data));
      fetch("/createCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          console.log(resp);
          // dispatch(courseAction(resp));
        });
    };
  }
  static updateCourseMiddleware(data) {
    const { _id } = data;
    console.log(_id);
    return dispatch => {
      // dispatch(courseAction(data));
      fetch(`/updateCourse/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          console.log(resp);
          // dispatch(courseAction(resp));
        });
    };
  }
  static getCourseDataMiddleware(data) {
    return dispatch => {
      dispatch(actionCreater.getCourseData(data));
    };
  }
}

export default middleWare;
