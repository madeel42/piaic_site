import React from "react";
import "./lectures.css";
// import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import DashNav from '../../../StudentPortal/DashBoard/DashNav/dashNav'
import SlideBar from '../../../StudentPortal/DashBoard/SlideBar/slideBar'
import { Link } from 'react-router-dom'

class Lectures extends React.Component {
    render() {
        return <>
            <div>
                <DashNav />
                <SlideBar />
                <div id="lectureComponent">
                    <div id="lectureComponent-headingDiv">
                        <span id="lectureComponent-headingDiv-span">ONLINE LECTURES</span>
                    </div>
                    {
                        this.props.data.map((item) => {
                            return <>
                                <div className="lectureComponent-cardsDiv">
                                    <div className="lectureComponent-cardsDiv-card">
                                        <div className="lectureComponent-cardsDiv-card-spanDiv">
                                            <span className="lectureComponent-cardsDiv-card-spanDiv-span">COURSE</span>
                                        </div>

                                        <div className="lectureComponent-textDiv">
                                            <span className="lectureComponent-textDiv-span">{item.title}</span>
                                        </div>

                                        <div className="lectureComponent-dataDiv">
                                            <p className="lectureComponent-dataDiv-p">{item.text}</p>
                                        </div>

                                        <hr className="lectureComponent-line"></hr>
                                        <Link to='/onlinecourses/AIC' className='link'>

                                            <div className="viewCourse-btn">
                                              View Courses
                                            </div></Link>

                                    </div>
                                </div>
                            </>
                        })
                    }

                </div>
            </div>

        </>
    }
}

function getCourseData(store) {
    return {
        data: [
            {
                title: "Artificial Intelligence",
                text: "A one year AI program designed for absolute beginners. Getting Pakistan ready for the new era of computing enabled by the rise of AI."
            },

        ]
    }
}

export default connect(getCourseData)(Lectures)