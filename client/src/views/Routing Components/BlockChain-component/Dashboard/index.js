import React from 'react';
import { Route } from 'react-router-dom';
import SimpleContainer from './container/container'
import SimpleCard from './card/cards';
import Card from './card2/card2'
import Text from './context/text.js'
import Footer from './footer/footer'
import InfoComponenet from './infoComponent/infoComp'
import StrategyComponent from './saaddiComponent/footerBove'
// import Slider from './slider/slider.js'
// import Slides from './slider/slides.js'
// import SaadCards from './saadCards/cards.js'

class Dashboard extends React.Component {
    render() {
        return (
            <div style={{
                backgroundImage: 'linear-gradient(90deg,#e6dada,#dfedf0)'

            }}>

                <SimpleContainer />
                <SimpleCard />
                <Card />
                <Text />
                {/* <StrategyComponent />                                                                                                                                                  */}
                {/* <InfoComponenet />   */}
                {/* <Slider />    
                <Slides /> */}
                {/* <SaadCards /> */}



                {/* <Route path='/abc' Component={}> */}


                {/* <Footer /> */}
                <Footer />
            </div>
        )
    }
}

export default Dashboard;