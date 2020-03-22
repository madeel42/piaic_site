import React from 'react';
import Payment_history from './payment_history'
import Payment_Branches from './paymentBranches/payment_branches';
import quarterPanel from './adminPanel/course/quarterPanel';
import course from './adminPanel/course/courseForm'
// import coursedropdown from './adminPanel/course/courseDropDown'
import Payment from './payment/payment'
import { Route } from 'react-router-dom';
import home from './Home/home'
class Allrouter extends React.Component {
    render() {
        return <div>
             <Route path='/payment_history' component={Payment_history} />
             <Route path='/payment_branches' component={Payment_Branches} />
             <Route path='/payment/artifical_intelligence' component={Payment} />
             <Route path='/payment/adminpanal/:_id' component={quarterPanel}/>
             <Route path='/payment/adminpanel/course' component={course}/>
             <Route path='/home' component={home}/>
        </div>
    }
}
export default Allrouter;