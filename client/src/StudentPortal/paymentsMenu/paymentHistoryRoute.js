import React from 'react'
import PropTypes from 'prop-types'
import DashNav from '../DashBoard/DashNav/dashNav'
import SlideBar from '../DashBoard/SlideBar/slideBar'

function paymentHistory(props) {
    return (
        <div className='paymentHistoryRoute'>
            <DashNav />
            <SlideBar />


        </div>
    )
}

paymentHistory.propTypes = {

}

export default paymentHistory

