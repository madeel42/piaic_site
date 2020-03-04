import React from 'react'
import PropTypes from 'prop-types'
import PaymentMenu  from "../../paymentsMenu/paymentMenu";
import Profile  from "../../ProfileMenu/profileMenu";
import {Link} from 'react-router-dom'
import './slideBar.css'
import home from '../logo/home.svg'
import profile from '../logo/avatar.svg'
import payment from '../logo/payment.svg'
import library from '../logo/library.svg'
import book from '../logo/book.svg'
import exam from '../logo/exam.svg'
import announcement from '../logo/announcements.svg'


function slideBar(props) {
    return (
        <div className='slideBar-main'>

            <div className='slideBar-container'>
                <div className='slideBar-content'>
                    <img src={home} alt="home" className='slideBar-img' />
                    <div className='abb' ><span className='slideBar-text'>Dashboard</span></div>
                       
                   </div>
                   </div>

                   <div className='slideBar-container' id='slideBar-profile-div'>
                <div className='slideBar-content'>
               
                    <img src={profile} alt="home" className='slideBar-img' />
                    <div className='abb' ><span className='slideBar-text'>Profile</span></div>
                    <Profile />
                   </div>
                   </div>

                   <div className='slideBar-container' id='slideBar-payment-div'>
                <div className='slideBar-content'>
                    <PaymentMenu/>
                    <img src={payment} alt="home" className='slideBar-img' />
                    <div className='abb' ><span className='slideBar-text'>Payment</span></div>

                   </div>
                   </div>

                   <div className='slideBar-container'>
                <div className='slideBar-content'>
                    <Link to='/onlinecourses' className='link'>
                    <img src={library} alt="home" className='slideBar-img' />
                    <div className='abb' ><span className='slideBar-text'>Online Lectures</span></div>
                    </Link>
                   </div>
                   </div>

                   <div className='slideBar-container'>
                <div className='slideBar-content'>
                    <Link to='textbooks' className='link'>
                    <img src={book} alt="home" className='slideBar-img' />
                    <div className='abb' ><span className='slideBar-text'>Books</span></div>
                        </Link>

                   </div>
                   </div>

                   <div className='slideBar-container'>
                <div className='slideBar-content'>
                <Link to='exams' className='link'>
                    <img src={exam} alt="home" className='slideBar-img' />
                    <div className='abb' ><span className='slideBar-text'>Exams</span></div></Link>

                   </div>
                   </div>

                   <div className='slideBar-container'>
                <div className='slideBar-content'>
                <Link to='announcements' className='link'>
                    <img src={announcement} alt="home" className='slideBar-img' />
                    <div className='abb-2' ><span className='slideBar-text'>Announcements</span></div></Link>

                   </div>
                   </div>

                 


        </div>
    )
}

slideBar.propTypes = {

}

export default slideBar

