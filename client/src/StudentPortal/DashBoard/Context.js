import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './dashNav.css';
 
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

export default function NavCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      
    <Card className={classes.card} className='mainContainer'>
      <CardContent>
        <Typography  className="textcss" gutterBottom>

        <div className="text">
        <span className='insideText'>
        For questions, please contact us at the PIAIC helpline:
         0308-222-0203 (also available on WhatsApp) between 10 AM - 6 PM.
         </span> 
         <br />
         <span className="insideText">
         Please note we are closed on Fridays.
         </span>
        </div>
        </Typography>
        <Typography variant="h6" component="h2" className="registration-link">
         <span  className="inside-Registration"> New Registrations are open in Sialkot - <a href="#" className="link">Click Here</a></span>
        </Typography>
        <Typography className="courses" component="h2">
        <span className="insideCourses">
        My Courses
        </span>
          
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
