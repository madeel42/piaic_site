import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './paymentMenu.css'

function paymentMenu(props) {
  return (
    <div id="payments">
    <Link to='/payment' className='link'><span>Payments</span></Link>

    <Link to='/paymenthistory' className='link'><span>Payment History</span></Link>

    <Link to='/paymentbranches' className='link'><span>Payment Branches</span></Link>
  </div>
  )
}



export default paymentMenu;

