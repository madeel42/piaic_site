import * as topicActionCreater from '../actions/actionCreater/topicActionCreater'
class MiddleWare {
  static topicMiddleWare = data => {
    console.log(data)
    return dispatch => {
      fetch("/createTopic/" + data.params, {
        method: "POST",
        headers: {
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
  static getTopicData = (data) => {
    return dispatch => {
        dispatch(topicActionCreater.getTopicAction(data))
    };
  };
  static updateTopicData = (data) => {
    const id = data._id;
    console.log(id);
    return dispatch => {
      fetch('/updateTopicData/' + id,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      })
    }
  }
}
export default MiddleWare;
