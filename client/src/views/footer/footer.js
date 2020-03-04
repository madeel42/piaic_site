import React from 'react';
import './footer.css'
import src from './footer.png'



export default class Footer extends React.Component {
    render() {
        return <>
            <footer id="footer">
                <b className='footer-main_heading'> © 2020 PIAIC. All rights reserved.</b>
                <div className='logo-div'>
               <h4 id='powered'>Powered by
                </h4>
                <img id='img' src={src} alt="panaCloud"/>
                </div>
                
            </footer>


        </>
    }
}



 
