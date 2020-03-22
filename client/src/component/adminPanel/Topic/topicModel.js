import React, { useState } from "react";
// import match from "autosuggest-highlight/match";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Input } from "@material-ui/core";
import  ExamDesign  from "./examDesiner";
import "./topicModel.css";
/////////
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
const ModalComponent = props => {
  const [showDiv, setDivshow] = React.useState(true);
  const {
    open,
    handleClose,
    classes,
    setTopicValue,
    handleSubmit,
    topicValue,
    examdesign,
    setexamDesin
  } = props;
  const showDivHandler = () => {
    setDivshow(false);
  };
  const closeDivHandler = () => {
    setDivshow(true);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div>
            <h1>Create Topic</h1>
            {/* <FormControl className={classesDropdown.formControl}>
            </FormControl> */}
            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                  id="my-input"
                  value={topicValue ? topicValue.name : ""}
                  onChange={e => {
                    console.log(e.target.value);
                    setTopicValue({
                      ...topicValue,
                      name: e.target.value
                    });
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input
                  id="my-input"
                  value={topicValue ? topicValue.des : ""}
                  onChange={e => {
                    console.log(e.target.value);
                    setTopicValue({
                      ...topicValue,
                      des: e.target.value
                    });
                  }}
                />
              </FormControl>
            </div>
            <button className="courseSubmitBtn" onClick={handleSubmit}>
              Save
            </button>
            <span>
              <button className="courseSubmitBtn" onClick={handleClose}>
                close
              </button>
              <button className="courseSubmitBtn" onClick={showDivHandler}>
                exam design
              </button>
            </span>
            <div className={`${showDiv ? "hide" : "ShowDivv"}`}>
              <ExamDesign
                closeDivHandler={closeDivHandler}
                setexamDesin={setexamDesin}
                examdesign={examdesign}
                // examAnsDesign={examAnsDesign}
                // setexamAnsDesign={setexamAnsDesign}
                // handleAnswerSubmit={handleAnswerSubmit}
              />
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
