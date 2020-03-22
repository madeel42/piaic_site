import * as actionCreater from './../actions/actionCreater/quarterActionCreater'
class MiddleWare {
  static createQuarterMiddleWare = data => {
    console.log(data);
    return dispatch => {
      // dispatch()
      fetch("/createQuarterData/" + data.params, {
        method: "POST",
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log(res);
        });
    };
  };
  static updateQuarterMiddleWare = data => {

    const { _id } = data;
    console.log(_id)
    return dispatch => {
      fetch("/updateQuarterData/" + _id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => {
          return res.json()
      }).then(res => {
          console.log(res)
      });
    };
  };
  static getQuarterData = (data) => {
    return dispatch => {
      dispatch(actionCreater.getQuarterData(data))
    }
  }
}
export default MiddleWare;
