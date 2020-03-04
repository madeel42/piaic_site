import React from 'react'
import PropTypes from 'prop-types'
import Main from './Dashboard/index'
import Navbar from '../../Navbar/navbar'

const mainComponent = props => {
    return (
        <div>
            <Navbar />
            <Main />
        </div>
    )
}

mainComponent.propTypes = {

}

export default mainComponent
