import React from 'react'
import PropTypes from 'prop-types'
import AICard from './AIcard'
import CNCard from './CloudNativeCard'
import BCCard from './BlockChainCard'
import IACard from './InternetThingCard'
import GCard from './5GComputing'
import QCCard from './QuantamComputingCard'
import {Link} from 'react-router-dom'








import './card.css'

function cards(props) {
    return (<div className='animated bounce programs-div' >
        <div >
            <div className='program-headline-div'> <h1 id='program-headline-div-h1'>Available Programs</h1> </div>
            <div className='cards animated jumpIn delay-3s'>
            <Link to='/artificial' className='apply-btn'><div><AICard /></div></Link>
                
                <div><CNCard /></div>
            <Link to='/blockchain' className='apply-btn'><div><BCCard /></div></Link>

                
                <div><IACard /></div>
                <div><QCCard /></div>
                <div><GCard /></div>
                

                
               



              



            </div>
        </div>
    </div>



    )
}

cards.propTypes = {

}

export default cards

