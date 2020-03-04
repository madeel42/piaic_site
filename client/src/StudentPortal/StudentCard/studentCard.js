import React from 'react';
import './studentcard.css'
import profile from './imgs/profile.jpeg';
import { connect } from "react-redux"





 class StudentCard extends React.Component {
        date = new Date();
    render() {
         
        return <>
                    <div className="buttons-div">

                        <button class="pr-button"><span className="p-Button">Print</span></button>
                        <button class="cr-button" ><span className="p-Button">Cancel</span></button>
                    </div>
                <div className="baackground_image">
            <div className="maindiv-student-card" >


                    
                <div style={{ display: "flex", flexWrap: "wrap-Reverse",marginTop:"10px" }}>
                    <div className="innerdiv-student-card">
                        <div className="id-text">
                            <span className="t1">ID CARD</span>
                        </div>
                        <div className="studentCard-Info">








                            <table id="studentCard-info-table">

                                <tr >
                                    <td className='text1'>Name:</td>
                                    <td className='text2'>{this.props.data.Name}</td>

                                </tr>
                                <tr>
                                    <td className='text1'>Roll No: </td>
                                    <td className='text2'> {this.props.data.Roll} </td>

                                </tr>
                                <tr>
                                    <td className='text1'>Distance learning: </td>
                                    <td className='text2'> {this.props.data.Distance} </td>

                                </tr>
                                <tr>
                                    <td className='text1'>City: </td>
                                    <td className='text2'>{this.props.data.City}</td>

                                </tr>
                                <tr>
                                    <td className='text1'>Center: </td>
                                    <td className='text2'> {this.props.data.Center} </td>

                                </tr>
                                <tr>
                                    <td className='text1'>Campus:</td>
                                    <td className='text2'>{this.props.data.Campus} </td>

                                </tr>
                                <tr>
                                    <td className='text1'>Days / Time:</td>
                                    <td className='text2'>{this.props.data.Date_Time} </td>

                                </tr>
                                <tr>
                                    <td className='text1'>Batch {this.props.data.Batch} </td>
                                </tr>

                            </table>






                        </div>
                    </div>
                    <div className="picture-div">
                        <img className="img-logo" src={profile} alt="" />

                    </div>
                </div>
                <div className="student-card-footer">

                    <div className="footer">

                        <div className="Q1">
                              <span className="text-q1">Q{this.props.data.Quarter} </span> 
                        </div>
                        <div className="AIC">
                           <span className="text-q1">{this.props.data.Department} </span> 
                        </div>
                        <div className="line" >

                        </div>
                        
                    </div>   
                    <div className="signature-div">

                        <div className="line">

                        </div>

                        <div className="signature-text">
                              <span className="sig-text">Authorized Signature</span> 
                        </div>
                        
                        </div>               
                        
                        </div>

                        </div>

                    </div>

        </>
    }
}


function getStudentData(store) {
    return {
      data: 
        {
            Name: "Ali Akbar",

            Roll: "PIAIC66981",
            
            Distance: "No",
            
            City: "Faisalabad",
            
            Center: "Saylani Welfare",
            
            Campus: "Lall Mill Chowk",
            
            Date_Time: "Sunday - 09:00 AM to 12:00 PM",

            Batch : "4",

            Quarter : "1",

            Department : "Aic"
        },
  
      
    }
  }
  
  export default connect(getStudentData)(StudentCard )