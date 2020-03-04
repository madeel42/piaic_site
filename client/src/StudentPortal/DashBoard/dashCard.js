import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './dashCard.css'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // const [state, setstate] = useState(true)


  return (
    <>
    <div className='inner-div animated pulse' >
    <Card className={classes.card} className="frst-Card">
      <CardContent className='class-content'>
        <Typography variant="h5" component="h2">
          Artificial Intelligence<span className="aic">(AIC)</span> 
        </Typography>
        <div className='status'>
        Status: <div className='cancel' >CANCELLED</div> 
        </div>
        
        <Typography variant="body2" component="p" >
        A one year AI program designed for absolute beginners. Getting Pakistan ready for the n...
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <span className='batch'>Batch:</span> <span className='batch'>City:</span>
      </CardContent>
       
    </Card>
    </div>
    </>
  );
}
