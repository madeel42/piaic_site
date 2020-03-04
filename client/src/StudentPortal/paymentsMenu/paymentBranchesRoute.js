import React from 'react'
import PropTypes from 'prop-types'
import DashNav from '../DashBoard/DashNav/dashNav'
import SlideBar from '../DashBoard/SlideBar/slideBar'
function paymentBranches(props) {
    return (
        <div className='paymentBranchesRoute'>
            <DashNav />
            <SlideBar />

        </div>
    )
}

paymentBranches.propTypes = {

}

export default paymentBranches

