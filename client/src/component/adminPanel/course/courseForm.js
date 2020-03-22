import React, { useState, useEffect } from "react";
//Material UI Components
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
//Custom Components
import ModalComponent from "./courseModal";
//Redux
import middleWare from './../../../storeMiddleWare/courseMiddleware'
// import middleWare from "./../../../store/middleWare/courseMiddleware";
import { connect } from "react-redux";
//Styles
import "./../../payment/payment.css";
import "font-awesome/css/font-awesome.min.css";
import "./courseForm.css";
const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow:'hidden'
  }
}));
const Course = props => {
  const classes = useStyles();
  const [selectedCourse, setSelectedCourse] = useState({
    name: "",
    batch: "",
    city: ""
  });
  // const [ServerData, setServerData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openDropDown, setOpenDropDown] = React.useState(false);
  useEffect(() => {
    fetch("/getCourseData", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        props.getCourse(res);
        // setServerData(res);
      });
  }, [open, openUpdate]);
  const handleOpen = () => {
    setOpen(true);
    setSelectedCourse(null);
  };
  const handleopenDropDown = () => {
    setOpenDropDown(true);
  };
  const handleOpenUpdate = item => {
    setOpenUpdate(true);
    setSelectedCourse(item);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateClose = () => {
    setOpenUpdate(false);
  };
  const handleCloseDropDown = () => {
    setOpenDropDown(false);
  };
  const handlerChange = e => {
    console.log(e);
    setSelectedCourse({
      ...selectedCourse,
      name: e.target.value
    });
  };
  const submitValue = () => {
    props.courseCreate(selectedCourse);
  };
  const updateValue = () => {
    console.log(selectedCourse);
    props.updateCourse(selectedCourse);
  };
  console.log(selectedCourse);
  console.log(selectedCourse ? selectedCourse.name : "");
  console.log("courseReducers", props.getCourseData);
  return (
    console.log(props) || (
      <div>
        <h3 className="head1">{props.heading} </h3>
        <div className="linebreak"></div>
        {props.getCourseData.map(item => {
          return (
            <div className="block1 card paid">
              <Link to={`/payment/adminpanal/${item._id}`}>
                {" "}
                <div class="container fistvalacontaoner">
                  <div className="row rowfirstgrig">
                    <div className="col-sm gridfirstDiv">
                      <p className="bactch">{item.batch}</p>
                    </div>
                    <div className="col-sm">
                      <div className="number1">
                        <p className="coursename">{item.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div class="card-body card-bodystyl">
                <div className="footer">
                  <h1 className="cityname">city:{item.city}</h1>
                </div>
                <div>
                  <div>
                    {" "}
                    <button
                      className="updateBtn1"
                      onClick={() => {
                        handleOpenUpdate(item);
                      }}
                    >
                      update
                    </button>
                    <ModalComponent
                      selectedCourse={selectedCourse}
                      setSelectedCourse={setSelectedCourse}
                      classes={classes}
                      handleSubmit={updateValue}
                      open={openUpdate}
                      handleClose={handleUpdateClose}
                      handlerChange={handlerChange}
                      name={"update"}
                      handleopenDropDown={handleopenDropDown}
                      handleCloseDropDown={handleCloseDropDown}
                      openDropDown={openDropDown}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <div className="addCoursediv">
            <span>
              <b>Add Course</b>
            </span>
            <button className="plusBtn" type="button" onClick={handleOpen}>
              +
            </button>
            <ModalComponent
              classes={classes}
              handleSubmit={submitValue}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
              open={open}
              handleClose={handleClose}
              handlerChange={handlerChange}
              name="add"
              handleopenDropDown={handleopenDropDown}
              handleCloseDropDown={handleCloseDropDown}
              openDropDown={openDropDown}
            />
          </div>
        </div>
      </div>
    )
  );
};
const mapDispatchToProps = dispatch => {
  return {
    courseCreate: data => {
      dispatch(middleWare.courseMiddleware(data));
    },
    updateCourse: data => {
      dispatch(middleWare.updateCourseMiddleware(data));
    },
    getCourse: data => {
      dispatch(middleWare.getCourseDataMiddleware(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    heading: "Course",
    getCourseData: state.courseReducers.getCourseData
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Course);
