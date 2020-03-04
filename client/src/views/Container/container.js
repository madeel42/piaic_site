import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './container.css'
import src from '../overview/image/president.png'


function container(props) {
    return (<div className='main-president-div'>
        <div className='president-wrapper ' >
            <div> </div>
            <div className='president animated zoomIn delay-1s'>
                <img className='president' src={src} alt="" />

            </div>
            <div className='init'>
                <h1 className=' president-heading animated fadeInRight delay-s '>
                    <span className='pr'>Presidential Initiatve</span>
                </h1>
                <p className='sub-heading  animated fadeInRight '>For Artificial Intelligence and Computing (PIAIC) </p>
<div className='president-says-div'>
                <p className=' president-says '>
                    <span className=' president-says animated fadeIn delay-1s '>The</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>mission</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>of</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>PIAIC</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>is</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>to</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>reshape</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>Pakistan</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>by</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '>revolutionizing</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '> education,</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-1s '> research,</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-2s '> research,</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-2s '>  and  </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-3s '>  business</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-3s '> by</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-3s '> adopting  </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-3s '> latest, </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-3s '>  cutting-edge </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-3s '>  technologies. </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>  Experts    </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   are   </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>  calling   </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>  this   </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   the   </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   4th    </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   industrial   </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   revolution </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '> We </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '> want </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   Pakistan </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   to </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   become  </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   a</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   global</span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-4s '>   hub   </span>
                  
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>   for  </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>   AI,  </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>    data science, </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>    cloud native computing,   </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>    edge computing,  </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>    augmented reality,  </span>
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>    and   </span>
    
                    <span> </span>
                    <span className=' president-says animated fadeIn delay-5s '>    internet of things.  </span>

                </p></div>

             <Link to='blockchain' className='apply-btn'><div className='apply-btn-div animated fadeInRight delay-5s'
                >Apply</div></Link>   

            </div>

        </div>

    </div>

    )
}

container.propTypes = {

}

export default container

