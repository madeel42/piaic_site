import React, { useState, useEffect } from "react";
import "./../../payment/payment.css";
// import "font-awesome/css/font-awesome.min.css";
// import middleWare from './../../../store/middleWare/quarterMiddleWare'
import middleware from "../../../storeMiddleWare/quarterMiddleWare";
import { connect } from "react-redux";
import "./../course/quarterPanel.css";
import { makeStyles } from "@material-ui/core/styles";
//////////@Custom component ///
import QuarterModelComp from "./quarterModel";
import { Link } from "react-router-dom";

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
    width: 380,
    overflow:'hidden'
  }
}));
const QuarterPanel = props => {
  const classes = useStyles();
  const [selectedQuarter, setSelectedQuarter] = useState({
    quarterName: "",
    batch: "",
    campus: "",
    year: "",
    quaterfee: ""
  });
  // const [serverquarterData, setserverquarterData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  useEffect(() => {
    fetch("/quarterAllDetails/" + props.match.params._id, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        props.getQuarterData(res);
        // setserverquarterData(res);
      });
  }, [open, openUpdate]);
  const handleOpen = () => {
    setOpen(true);
    setSelectedQuarter(null);
  };
  const handleopenUpdate = item => {
    console.log(item);
    setOpenUpdate(true);
    setSelectedQuarter(item);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  const handleUpdateSubmit = () => {
    props.updateQuarterData(selectedQuarter);
  };
  const handleSubmit = () => {
    const params = props.match.params._id;
    props.createQuarterData({ ...selectedQuarter, params });
  };
  let head = props.quarterData[0] ? props.quarterData[0].course.name : "";
  console.log("quarterDaata", props.quarterData);
  return (
    console.log(props) || (
      <div>
        <h3 className="head1">{head} </h3>
        <div className="linebreak"></div>
        <div>
          {props.quarterData.map(item => {
            return (
              <div className={"block1 card paid"}>
                <Link to={`/payment/adminpanel/topic/${item._id}`}>
                  {" "}
                  <div class="container fistvalacontaoner">
                    <div className="row rowfirstgrig">
                      <div className="col-sm gridfirstDiv">
                        <i className="fal fa-square squretyl"></i>
                      </div>
                      <div className="col-sm">
                        <div className="number1">
                          <p className="bactch4">{item.batch}</p>
                          <p className="quater1">{item.quarterName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div class="card-body card-bodystyl">
                  <div className="footer">
                    {item.status == "unpaid" ? (
                      <div>
                        <i class="fas fa-lock"></i>
                        <span className="paidText">{item.status}</span>
                      </div>
                    ) : (
                      <div>
                        <i class="far fa-check-square"></i>
                        <span className="paidText">{item.status}</span>
                      </div>
                    )}
                    {/* <Link to='/payment/adminpanel/form'><p className="edit">Update</p></Link> */}
                    <button
                      className="updateQuarterBtn1"
                      type="button"
                      onClick={() => handleopenUpdate(item)}
                    >
                      update
                    </button>
                    <QuarterModelComp
                      classes={classes}
                      selectedQuarter={selectedQuarter}
                      setSelectedQuarter={setSelectedQuarter}
                      open={openUpdate}
                      handleClose={handleCloseUpdate}
                      handleSubmit={handleUpdateSubmit}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="addquarterdiv">
          <span>
            <b>Add Quarter</b>
          </span>
          <button className="plusBtn" type="button" onClick={handleOpen}>
            +
          </button>
          <QuarterModelComp
            classes={classes}
            open={open}
            handleClose={handleClose}
            setSelectedQuarter={setSelectedQuarter}
            selectedQuarter={selectedQuarter}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    )
  );
};
const mapDispatchToProps = dispatch => {
  return {
    createQuarterData: data => {
      dispatch(middleware.createQuarterMiddleWare(data));
    },
    updateQuarterData: data => {
      dispatch(middleware.updateQuarterMiddleWare(data));
    },
    getQuarterData: data => {
      dispatch(middleware.getQuarterData(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    quarterData: state.getQuarter.getQuarterData
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuarterPanel);
