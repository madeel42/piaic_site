import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./container.css"
import Cards from "../cards/cards.js";

export default function SimpleContainer() {
  return (<>
    <div id="overAllContainer">
      <React.Fragment>
        <Container maxWidth="100vw" id="mainContainer">
          <Typography component="div" style={{ backgroundColor: '	#1A8F8C', height: '91.5vh' }}>
            <div id="contextDiv">
              <h1 id="context-tag"> Internet of Things and<br></br> AI Specialist</h1>
              <div id="pararaph-div">
                <p className="line">A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS
                         GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF <br></br>THINGS AND AI
              <br></br>
                </p>
              </div>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
      <div id="div-after-container">
        <h1 id="text-tag">Program Structure</h1>
        <br></br>
        <h4 id="quarter-tag">Six Quarters of IOT Course Work</h4>
      </div>
      <Cards></Cards>
    </div>
  </>
  );
}
