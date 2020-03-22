import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const quarterModelComp = props => {
  const {
    classes,
    open,
    handleClose,
    setSelectedQuarter,
    selectedQuarter,
    handleSubmit
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
          {/* <h2 id="transition-modal-title">Transition modal</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p> */}
          <div>
            <h1>Quarter</h1>

            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">quarterName</InputLabel>
                <Input
                  id="my-input"
                  value={selectedQuarter ? selectedQuarter.quarterName : ''}
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedQuarter({
                      ...selectedQuarter,
                      quarterName: e.target.value
                    });
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="my-input">batch</InputLabel>
                <Input
                  id="my-input"
                  value={selectedQuarter ? selectedQuarter.batch : ''}
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedQuarter({
                      ...selectedQuarter,
                      batch: e.target.value
                    });
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="my-input">campus</InputLabel>
                <Input
                  id="my-input"
                  value={selectedQuarter ? selectedQuarter.campus : ''}
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedQuarter({
                      ...selectedQuarter,
                      campus: e.target.value
                    });
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="my-input">Year</InputLabel>
                <Input
                  value={selectedQuarter ? selectedQuarter.year : ''}
                  id="my-input"
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedQuarter({
                      ...selectedQuarter,
                      year: e.target.value
                    });
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="my-input">day</InputLabel>
                <Input
                  id="my-input"
                  value={selectedQuarter ? selectedQuarter.day : ''}
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedQuarter({
                      ...selectedQuarter,
                      day: e.target.value
                    });
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="my-input">quaterfee</InputLabel>
                <Input
                  id="my-input"
                  value={selectedQuarter ? selectedQuarter.quaterfee : ''}
                  onChange={e => {
                    console.log(e.target.value);
                    setSelectedQuarter({
                      ...selectedQuarter,
                      quaterfee: e.target.value
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
            </span>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default quarterModelComp;
