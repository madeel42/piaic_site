import React, { useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Home from "./views/Home";
import Dashboard from './StudentPortal/DashBoard/DashNav/dashNav'
import Payment from './StudentPortal/paymentsMenu/paymentRoute'
import PaymentHistory from './StudentPortal/paymentsMenu/paymentHistoryRoute'
import PaymentBranches from './StudentPortal/paymentsMenu/paymentBranchesRoute'
import Announcement from './views/ibtisam/announcement/announcement'
import Exams from './views/ibtisam/exam/exam'
import Books from './views/ibtisam/books/books'
import OnlineLectures from './views/ibtisam/onlineLectures/lectures'
import StudentCard from './StudentPortal/StudentCard/studentCardMain'
import SignUp from './Forms/signup/signup'
import Login from './Forms/signup/login'
import PrivateRoute from './routing/PrivateRoute'
import myStore from './store'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'
import CreateProfile from './StudentPortal/DashBoard/userProfile/CreateProfle'



import './App.css';
// import Dashboard from './views/Routing Components/BlockChain-component/Dashboard';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    myStore.dispatch(loadUser
      ());
  }, [])
  return (<Provider store={myStore}>
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path='/create-profile' component={CreateProfile} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/paymenthistory" component={PaymentHistory} />
          <Route exact path="/paymentbranches" component={PaymentBranches} />
          <Route exact path="/announcements" component={Announcement} />
          <Route exact path="/exams" component={Exams} />
          <Route exact path="/onlinecourses" component={OnlineLectures} />
          <Route exact path="/student-card" component={StudentCard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />

          {/* <Route exact path="/textbooks" component={Books} /> */}







        </Switch>
      </div>
    </Router></Provider>

  );
}

export default App;
