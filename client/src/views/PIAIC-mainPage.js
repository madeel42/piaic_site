import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar/navbar'
import Container from './Container/container'
import Cards from './Cards/cards'
import VidCont from './VideoPlayer/VideoContainer'
import Footer from './footer/footer'
import Logos from './StrategicPartners/StrategicPartners'
import Info from './infoComponent/infoComp'
import Carousel from './Carousel/carousel'


import '../App.css'
// import Login from './LoginRegistration/login'

const Home = props => {
    return (
        <div>

            <Navbar />
            <Container />
            <Cards />
            <VidCont/> 
            <Carousel/>
            <Logos />
            <Info />
            <Footer />







        </div>
    )
}

Home.propTypes = {

}

export default Home
