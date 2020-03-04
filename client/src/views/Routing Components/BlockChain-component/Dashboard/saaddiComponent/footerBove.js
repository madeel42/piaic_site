import React from 'react';
import './comp.css'
import panacloud from './panacloud.svg';
import psx from './psx.png';
import sylani from './sylani.png'



export default class StrategyComponent extends React.Component{
    render(){
        return<>
            <div className="mainDiv">

            <div className="stratigy">
            Strategic Partners
            </div>
            <div className="icons">
                <img className="img" src={panacloud} alt=""/>
                <img className="img" src={psx} alt=""/>
                <img className="img" src={sylani} alt=""/>

            </div>
            </div>

        </>

    }
}