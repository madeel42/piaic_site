import React, { Component } from 'react'
import './studentCardOtherSide//othercardside.css'
import { connect } from 'react-redux';
// import MyStore from '../../../../store.js';

import QrCode from 'react.qrcode.generator'

class Demo extends Component {
  render() {
    return <div className="qr-component">
      
      <QrCode size="160" value={this.props.data.Name && this.props.data.Roll_No && this.props.data.Distance_learning && this.props.data.City} />
    </div>
  }
}


function getQRcodDAta(store) {
  return {
    data: 
      {
        Name: "Ali Akbar",
        Roll_No: "PIAIC66981",
        Distance_learning: "No",
        City: "Faisalabad"
      }

    
  }
}

export default connect(getQRcodDAta)(Demo)