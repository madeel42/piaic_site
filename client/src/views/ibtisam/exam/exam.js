import React from "react";
import "./exam.css";
import { connect } from "react-redux";
import DashNav from '../../../StudentPortal/DashBoard/DashNav/dashNav'
import SlideBar from '../../../StudentPortal/DashBoard/SlideBar/slideBar'
import browseimg from './browse.jpg'

class Exam extends React.Component {
    render() {
        return <>
            <div>
                <DashNav />
                <SlideBar />
                <div id="examComponent">
                    <div className='exam-Component-container'>
                    <div id="examComponent-browserDiv">
                        <a id="examComponent-browserDiv-a" href="#">DOWNLOAD SAFE EXAM BROWSER</a>
                        <img id="examComponent-browserDiv-img" src={browseimg}></img>
                    </div>

                    <div id="examComponent-quizConfigDiv">
                        <a id="examComponent-quizConfigDiv-a" href="#">CLICK TO DOWNLOAD OUR QUIZ CONFIG FILE</a>
                    </div>
                    {
                        this.props.Quizes.map((item) => {
                            return <>
                                <div className="examComponent-quizDiv">
                                    <div className="examComponent-quizDiv-quizes">
                                        <a className="examComponent-quizDiv-quizes-a" href="#">{item.number}</a>
                                    </div>
                                </div>
                            </>
                        })
                    }
</div>
                </div>
            </div>

        </>
    }
}

function getQuizes(store) {
    return {
        Quizes: [
            {
                number: "Quiz 1"
            },
            {
                number: "Quiz 2"
            },
            {
                number: "Quiz 3"
            },
            {
                number: "Quiz 4"
            }
        ]
    }
}
export default connect(getQuizes)(Exam);