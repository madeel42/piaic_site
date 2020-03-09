import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularUnderLoad() {
  return <CircularProgress  style={{
      position:'fixed',
    //   margin:'auto',
    marginLeft:'-5%',
    width:'50px',
      marginTop:'20%',
      marginBottom:'20%'
  }} disableShrink />;
}