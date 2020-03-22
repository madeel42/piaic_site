import React from "react";
import TextField from "@material-ui/core/TextField";
import "./examDesin.css";
import "font-awesome/css/font-awesome.min.css";
import { de } from "date-fns/locale";
import {connect} from 'react-redux'
import middleware from '../../../storeMiddleWare/examDesignMiddleware'
const ExamDesign = props => {
  // const [addfield, setaddField] = React.useState([{}]);
  let [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  let [questions, setQuestions] = React.useState([
    {
      addquestion: "",
      answers: [
        {
          answer: "",
          correct: false
        },
        {
          answer: "",
          correct: false
        },
        {
          answer: "",
          correct: false
        }
      ]
    }
  ]);

  let [currentQuestion, setCurrentQuestion] = React.useState(
    questions[currentQuestionIndex]
  );

  const { closeDivHandler } = props;
  const handleQuest_AnswerSubmit = e => {
    e.preventDefault();
    props.createExam({...currentQuestion})
    console.log(currentQuestion, "submit value successfully");
  };
  console.log(currentQuestion.answers);
  const addMoreField = (i, e) => {
    currentQuestion.answers.push({
      answer: "",
      correct: false
    });
    setCurrentQuestion({ ...currentQuestion });
  };
  console.log(currentQuestionIndex, "currentQuest Indx");
  const addMoreQuestionField = () => {
    questions.push({
      addquestion: "",
      answers: [
        {
          answer: "",
          correct: false
        },
        {
          answer: "",
          correct: false
        },
        {
          answer: "",
          correct: false
        }
      ]
    });

    setQuestions(questions);

    setCurrentQuestion(questions[questions.length - 1]);
    setCurrentQuestionIndex(questions.length - 1);
  };
  const removeAnsBox = e => {
    ////////////////////////////////here we remove our sigle inputox By pressing negative sign///
    console.log(e);
    let removefield = { ...currentQuestion };

    // console.log(removefield)
    removefield.answers.splice(e, 1);
    // let answers = currentQuestion.answers.filter((item,index)=> index !==e)
    //
    setCurrentQuestion(removefield);
  };
  const forwardArrow = () => {
    if (currentQuestionIndex < questions.length - 1) {
      let index = ++currentQuestionIndex;
      setCurrentQuestion(questions[index]);
      setCurrentQuestionIndex(index);
    }
    // if (currentQuestionIndex < questions.length - 1) {
    //   setCurrentQuestion(questions[++currentQuestionIndex]);
    // }
  };
  const backwardArrow = () => {
    debugger;
    if (currentQuestionIndex > 0) {
      let indexx = --currentQuestionIndex;
      setCurrentQuestion(questions[indexx]);
      setCurrentQuestionIndex(indexx);
    }
    // if (currentQuestionIndex > 0) {
    //   setCurrentQuestion(questions[--currentQuestionIndex]);
    // }
  };
  const dellQuestion = () => {
    let e = questions;
    let indexx = currentQuestionIndex;
    if (indexx < e.length - 1) {
      e.splice(indexx, 1);
      setQuestions(e);
      setCurrentQuestion(questions[indexx]);
      // setCurrentQuestionIndex(indexx);
    }
  };
  console.log(questions, "update examAns");
  return (
    <div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Question"
          value={questions[currentQuestionIndex].addquestion}
          onChange={e => {
            questions[currentQuestionIndex].addquestion = e.target.value;
            setCurrentQuestion({ ...questions[currentQuestionIndex] });
          }}
          style={{ margin: 8 }}
          placeholder="write question?"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          // InputLabelProps={{
          //   shrink: true
          // }}
          variant="outlined"
        />
      </div>
      <div>
        <div>
          {currentQuestion.answers.map(
            (el, i) =>
              console.log(el, "map vala") || (
                <div key={i}>
                  <div className="mapcompDiv">
                    <input
                      type="checkbox"
                      onChange={e => {
                        currentQuestion.answers[i].correct = e.target.checked;
                      }}
                      id=""
                      name=""
                      className="chkbox"
                    />
                    <label for="">
                      <input
                        type="text"
                        value={el.answer}
                        className="inputBoxAns"
                        onChange={e => {
                          el.answer = e.target.value;
                          setCurrentQuestion({ ...currentQuestion });
                        }}
                        placeholder="answer"
                        // name= {}
                        id=""
                      />
                      <button
                        className="negativebtn"
                        type="button"
                        onClick={() => removeAnsBox(i)}
                      >
                        -
                      </button>
                      <span className="removeAnsInSpan">
                        <b>remove ans</b>
                      </span>
                    </label>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="addmoreAns">
          <span>
            <span>
              <b>Add answer</b>
            </span>
            <button className="plusBtn" type="button" onClick={addMoreField}>
              +
            </button>
          </span>
          <span>
            <span>
              <b>Add Question</b>
            </span>
            <button
              className="plusBtn"
              type="button"
              onClick={addMoreQuestionField}
            >
              +
            </button>
          </span>
          <span>
            <span>
              <b>Remove Question</b>
            </span>
            <button className="plusBtn" type="button" onClick={dellQuestion}>
              -
            </button>
          </span>
          <span className="saveCloseBtn">
            <button className="saveAns" onClick={handleQuest_AnswerSubmit}>
              Save
            </button>
            <button className="saveAns" onClick={closeDivHandler}>
              close
            </button>
          </span>
        </div>
        <div className="arrowDiv">
          <span className="leftArrow" onClick={backwardArrow}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </span>
          <span className="rightArrow" onClick={forwardArrow}>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
return {
  createExam : data => {
    dispatch(middleware.examDesignMiddleware(data))
  }
}
}
export default connect(null,mapDispatchToProps)(ExamDesign);
