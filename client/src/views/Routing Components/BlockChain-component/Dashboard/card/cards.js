import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './block-card.css';
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

  return <>

<div className="technical-div">
                <h2 className="track">
                   Technical Track 
                </h2>
            </div>
    <div className='cards-div1' >
    
      
      <div className='cardavc1'>
        <Card className={classes.card} className='cards1'>
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div>
                <h1 className="frst1">
                  Quarter 1
              </h1>
              </div>
              <div id='inner-text1'>
                  <p>Foundation of BlockChain</p>
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className='cardavc1'>
        <Card className={classes.card} className='cards1' id='scnd1'>
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div>
                <h1 className="frst1">
                  Quarter 1
              </h1>
              </div>
              <div>
                  <p>Smart Contract Development</p>
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className='cardavc1'>
        <Card className={classes.card} className='cards1'  id='thrd1'>
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div>
                <h1 className="frst1">
                  Quarter 1
              </h1>
              </div>
              <div>
                  <p>Dapp Development</p>
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className='cardavc1'>
        <Card className={classes.card} className='cards1' id='frth1'>
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
              <div>
                <h1 className="frst1">
                  Quarter 1
              </h1>
              </div>
              <div>
                  <p>Advanced BlockChain Topics</p>
              </div>

            </Typography>
          </CardContent>
        </Card>
      </div>
     
    </div>
  </>
}