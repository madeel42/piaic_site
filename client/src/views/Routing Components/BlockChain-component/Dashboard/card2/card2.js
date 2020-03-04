import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './cards2.css'
import src from './mark'

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

export default function Cards2() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return <>

<div className="technical-div">
                <h2 className="track">
                Compulsory Innovation Track
                </h2>
            </div>
    <div className='cards-div' >
    
      
      <div className='cardabc'>
        <Card className={classes.card} className='cards' style={{ marginTop:"5%"}}>
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div  className='imgClass' >
              <img id='img-id' src={src} class="img-fluid gif" alt="Innovation leadership" />
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className='cardavc'>
        <Card className={classes.card} className='cards' id='scnd' style={{backgroundColor:"white"}} >
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div>
                <h1 className="frst" id='first-card'>
                  Quarter 1
              </h1>
              </div>
              <div>
                  <p>Innovation Methodologies</p>
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className='cardavc'>
        <Card className={classes.card} className='cards'  id='thrd' style={{backgroundColor:"rgba(0,0,0,.74)", color:"white"}}>
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div>
                <h1 className="frst">
                  Quarter 1
              </h1>
              </div>
              <div>
                  <p>Infrastructure As Code and DevOps</p>
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className='cardavc'>
        <Card className={classes.card} className='cards' id='frth' style={{backgroundColor:"#000", color:"white"}}>
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div>
                <h1 className="frst">
                  Quarter 1
              </h1>
              </div>
              <div>
                  <p>Lean UI/UX and Bot Design</p>
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>
     
    </div>
  </>
}
