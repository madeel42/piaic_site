import React from "react";
import "./announcement.css";
import { connect } from "react-redux";
import DashNav from '../../../StudentPortal/DashBoard/DashNav/dashNav'
import SlideBar from '../../../StudentPortal/DashBoard/SlideBar/slideBar'


class Announcement extends React.Component {
    render() {
        return <>
        <div>
         <DashNav/>
         <SlideBar/>
        <div id="announcementComponent">
                <div id="announcementComponent-heading">
                    <span className="announcementComponent-span">A</span>
                    <span className="announcementComponent-span">NNOUNCEMENTS</span>
                </div>

                <div id="announcementComponent-mapDiv">
                    {
                        this.props.quizArray.map((item) => {
                            return <div className="announcementComponent-dataDiv">
                                <span className="announcementComponent-dateSpan">{item.date}</span>
                                <div className="announcementComponent-circleDiv"></div>
                                <div className="announcementComponent-lineDiv"></div>
                                <span className="announcementComponent-testSpan">{item.text}</span>
                            </div>
                        })
                    }
                </div>

            </div>

        </div>
          
        </>
    }
}

function receiveArray(store) {
    return {
        quizArray: [
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz Islamabad"
            },
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz"
            },
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz"
            },
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz"
            },
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz"
            },
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz"
            },
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz"
            },
            {
                date: "01/01/2020",
                text: "PIAIC Batch 3 Islamabad AIC and CNC Quiz"
            }
        ]
    }
}

export default connect(receiveArray)(Announcement);
