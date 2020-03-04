import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import l1 from './l1.jpg'
import l2 from './l2.jpg'
import l3 from './l3.jpg'
import './carousel.css'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [

  {
    label: 'President Launching the PIAIC Website',
    detail: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).',
    imgSrc: l1
  },
  {
    label: 'First Meeting with the President',
    detail: 'First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).',
    imgSrc: l2

  },
  {
    label: 'Meeting with Chief Secretary Sindh',
    detail: 'Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.',
    imgSrc: l3,


  }
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1200,
    // flexGrow: 1,
    marginBottom: '70px'


  },
  label: {
    textAlign: 'center',
    marginTop: '0px',
    display: 'inline-block',
    color: 'rgb(43, 41, 41)',
    fontsize: '0px !important'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  descriptionDiv: {
    disply: 'inline-block',
    // border: '1px solid red', 
    width: '450px',
    // marginLeft: '160px',
    marginTop: '30px',
    overflow: 'hidden',
    float: 'right'
  },
  detail: {
    fontsize: '60px',

    // width: '300px',  
    lineHeight: '2'

  }

}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className='carousel-main-div'>
      <h3 className='carousel-heading' style={{
        fontFamily: 'sans-serif'

      }}>Images</h3>

      <div className={classes.root} >

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className='carousel-image' src={step.imgSrc} alt={step.label}

                  style={{
                    display: 'inline',
                    // border: '1px solid red',
                    width: '700px',
                    marginLeft: '30px',

                  }
                  } />
              ) : null}
              <div className={classes.descriptionDiv}  style={{
                
              }}>

                {Math.abs(activeStep - index) <= 2 ? (
                  <h3 className={classes.label}

                    style={{
                      fontSize: '30px',
                      fontFamily: 'sans-serif'
                    }}
                  >{step.label}</h3>
                ) : null}

                {Math.abs(activeStep - index) <= 2 ? (
                  <p className={classes.detail} >{step.detail}</p>
                ) : null}

              </div>


            </div>
          ))}
        </AutoPlaySwipeableViews>

      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
