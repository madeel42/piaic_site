import React from 'react';
import './othercardside.css'
import Demo from '../qrcode';
import { connect } from 'react-redux';

class StudentOtherSide extends React.Component {
    render() {
        return <div>
           <div className="sndCard-main-div">
                <div className="sndCard-text-div">
                    <span className="sndCard-text-span">
                    You must print color copy of Id card & get it stamped from Saylani Head Office.
                    </span>
                </div>
                <div className="scndinnr-div">
                    <div className="qr-div">
                        <div className="qrCode">
                        <Demo />
                        </div>
                        <div className="quarter-div-text">
                                Q{this.props.data.Batch}
                        </div>
                        </div>
                </div>
           </div>
        </div>
    }
}



function cardData(store) {
    return {
      data: 
        {
          Batch : "1"
        }
  
      
    }
  }
  
  export default connect(cardData)(StudentOtherSide)