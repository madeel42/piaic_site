import React, { useState } from "react";
// import match from "autosuggest-highlight/match";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Input, FormHelperText } from "@material-ui/core";
/////////
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  }
}));
const ModalComponent = props => {
  const classesDropdown = useStyles();
  const {
    classes,
    handleCloseDropDown,
    handleopenDropDown,
    openDropDown,
    handleClose,
    handlerChange,
    handleSubmit,
    open,
    selectedCourse,
    setSelectedCourse
  } = props;
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
            <h1>Course</h1>
            <FormControl className={classesDropdown.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                course
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={openDropDown}
                onClose={handleCloseDropDown}
                onOpen={handleopenDropDown}
                value={selectedCourse ? selectedCourse.name : ""}
                onChange={handlerChange}
              >
                <MenuItem value={"Artificial Intelligence"}>
                  Artificial Intelligence
                </MenuItem>
                <MenuItem value={"Web developement"}>Web developement</MenuItem>
                <MenuItem value={"Paython"}>Paython</MenuItem>
              </Select>
            </FormControl>
            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Batch</InputLabel>
                <Input
                  id="my-input"
                  value={selectedCourse ? selectedCourse.batch : ""}
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedCourse({
                      ...selectedCourse,
                      batch: e.target.value
                    });
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="my-input">city</InputLabel>
                <Input
                  id="my-input"
                  value={selectedCourse ? selectedCourse.city : ""}
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedCourse({
                      ...selectedCourse,
                      city: e.target.value
                    });
                  }}
                />
              </FormControl>
            </div>
            <button
              className="courseSubmitBtn"
              onClick={handleSubmit}
              //   selectedCourse
              //     ? () => handleSubmit(selectedCourse)
              //     : handleSubmit
              // }
              // onClick={handleSubmit}
            >
              Save
            </button>
            <span>
              <button className="courseSubmitBtn" onClick={handleClose}>
                close
              </button>
            </span>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
