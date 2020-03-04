import React from 'react'
import PropTypes from 'prop-types'
import DashNav from '../DashBoard/DashNav/dashNav'
import SlideBar from '../DashBoard/SlideBar/slideBar'

function paymentRoute(props) {
    return (
        <div className='paymentRoute'>
            <DashNav/>
            <SlideBar/>
            
        </div>
    )
}

paymentRoute.propTypes = {

}

export default paymentRoute

