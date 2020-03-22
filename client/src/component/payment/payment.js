import React from 'react';
import './../payment/payment.css'
import 'font-awesome/css/font-awesome.min.css';
import getCourseData from './../../storeMiddleWare/courseMiddleware'
// import getCourseData from './../../store/middleWare/courseMiddleware'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Payment extends React.Component {
    constructor(props) {
        super(props)
        fetch('/getCourseData', {
            method: 'GET',
        }).then(res => {
            return res.json();
        }).then(res => {
            console.log(res);
            this.props.getData(res)
        })
    }
    render() {
        console.log(this.props.course)
        return <div>
            <h3 className='head1'>{this.props.heading}</h3>
            <div className="linebreak"></div>
            <div>
                {this.props.quarter.map((item) => {
                    return <div className={"block1 card paid" + (item.status == 'unpaid' ? ' blocked-quarter' : '')}>
                        <div class="container fistvalacontaoner">
                            <div className="row rowfirstgrig">
                                <div className="col-sm gridfirstDiv">
                                    <i className="fal fa-square squretyl"></i>
                                </div>
                                <div className="col-sm">
                                    <div className='number1'>
                                        <p className='bactch4'>{item.batch}</p>
                                        <p className='quater1'>{item.quartername}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body card-bodystyl">
                            <div className="footer">
                                {item.status == 'unpaid' ? <div><i class="fas fa-lock"></i><span className="paidText">{item.status}</span></div> : <div><i class="far fa-check-square"></i><span className="paidText">{item.status}</span></div>}

                            </div>
                        </div>
                    </div>
                })}
            </div>



            <div className='footerbelowdiv'>
                <p className='pTAg1'>Note: Please select the pending quarter to generate the fee voucher</p>
                <Link to='/payment_branches'><p className='pTAg2'>View list of payment branches</p></Link>
            </div>
        </div>

        // </div>
        // })}

        // </div>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: (data) => {
            dispatch(getCourseData.getCourseDataMiddleware(data))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        heading: 'Artificial Intelligence',
        // course: state.courseReducers.getCourseData,
        quarter: [
            {
                batch: 'Batch 4',
                quartername: 'Quarter 1',
                status: 'paid',

            },
            {
                batch: 'Batch 4',
                quartername: 'Quarter 2',
                status: 'paid'
            },
            {
                batch: 'Batch 4',
                quartername: 'Quarter 3',
                status: 'unpaid'
            },
            {
                batch: 'Batch 4',
                quartername: 'Quarter 4',
                status: 'unpaid'
            },






        ]
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Payment);


































///////////////////////////////////////////phlay wala///////////////////////
{/* {this.props.course.map((item) => {
                return  <div class="card">
                    <div className={`block1 ${classes.join(' ')}`} disabled={this.state.disabled}>
                        <div class="container">
                            <div className="row rowfirstgrig">
                                <div className="col-sm gridfirstDiv">
                                    <i className="fal fa-square"></i>
                                </div>
                                <div className="col-sm">
                                    <div className='number1'>
                                        <p className='bactch4'>{item.batch}</p>
                                        <p className='quater1'>{item.quarter}</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
// <div class="card-body">
{/* <div className="footer"> */ }
{/* {this.state.isPaid || this.state.isUnpaid} */ }
{/* {this.state.isPaid ? <div><i class="far fa-check-square"></i><span className="paidText">{this.state.isPaid}</span></div> : <div><i class="fas fa-lock"></i><span className="paidText">{this.state.isUnpaid}</span></div>} */ }
{/* <i class="far fa-check-square"></i><span className="paidText">{this.state.isPaid}</span> */ }

{/* </div> */ }
                    // </div>