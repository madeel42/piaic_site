import React, { Fragment, } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlockChainPage from './Routing Components/BlockChain-component/mainComponent'
import Artificial from './Routing Components/Artificial Intelligence/container/container'
import PIAIC from './PIAIC-mainPage'
import WIT from './WIT/WITGallery'
import Announcement from './ibtisam/announcement/announcement'
import Exam from './ibtisam/exam/exam'
import Online from './ibtisam/onlineLectures/lectures'
// import Signup from '../components/Register'
// import Login from '../components/Login'
import Dashboard from '../StudentPortal/DashBoard/DashNav/dashNav'
import '../App.css'
// import Login from './LoginRegistration/login'

const Home = props => {
    return (

        <div style={{ backgroundImage: 'linear-gradient(90deg,#e6dada,#dfedf0)',
        width:'fit-content' }}>
            <Router>
                <Fragment>
                    <Route exact path='/' component={PIAIC} />

                    <Route path='/blockchain' component={BlockChainPage} />
                    <Route path='/artificial' component={Artificial} />
                    <Route path='/wit' component={WIT} />
                    <Route path='/announcement' component={Announcement} />
                    <Route path='/exams' component={Exam} />
                    <Route path='/online' component={Online} />
                 
                    <Route path='/dashboard' component={Dashboard} />






                </Fragment>




            </Router>






        </div>
    )
}

Home.propTypes = {

}

export default Home
