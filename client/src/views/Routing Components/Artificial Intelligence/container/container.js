import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./container.css"
import Cards from "../cards/cards.js";
import Navbar from '../../../Navbar/navbar'

export default function SimpleContainer() {
  return (<>
    <div id="overAllContainer">
      <React.Fragment>
        <Navbar/>
        <Container maxWidth="100vw" id="mainContainer">
          <Typography component="div" style={{ backgroundColor: '	#192A56', height: '91.5vh' }}>
            <div id="contextDiv">
              <h1 id="context-tag"> Artificial Intelligence</h1>
              <div id="pararaph-div">
                <p className="line">A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.<br></br>
                  GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
              <br></br>
                </p>
              </div>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
      <div id="div-after-container">
        <h1 id="text-tagAI">Program Structure</h1>
        <br></br>
        <h4 id="quarter-tagAI">A four-quarter AI program in Data Science, Machine Learning,
        <br></br>and Deep Learning.</h4>
      </div>
      <Cards></Cards>
    </div>
  </>
  );
}
