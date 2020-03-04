import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './card.css';


function Card() {

  let [state, setState] = useState({
    hovered: false
  });

  return (
    <div className='mymainCard ' onMouseOver={() => {

      setState({ hovered: true })
    }} onMouseOut={() => {

      setState({ hovered: false })
    }}>
      <div className={state.hovered ? " hide-original" : "outline-bar"}></div>

      <strong className={state.hovered ? " hide-original" : "show-original AI-heading"}> Artificial Intelligence</strong>
{/* 
      <div className={state.hovered ? " hide-original" : "on-hover-div"}>

      </div>
       */}
      <div className={state.hovered ? "course-outline animated fadeIn" : "animated fadeOut"}>

          <div className={state.hovered ? " animated zoomIn on-hover delay-0.5s" : "animated  fadeOut"}  >
          <div className='on-hover-inDiv'>
            <h3 className='on-hover-heading'> Artificial Intelligence</h3>
            <p className='on-hover-detail'>
              <div>span repudiandae quis error
             quia. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam,hey rtegher  voluptatum!</div>
            </p>
          </div>

          </div>
        </div>

    </div>
  )
}



export default Card

