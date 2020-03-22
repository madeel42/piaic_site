import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import AllRouter from './allRouter'
class Main extends React.Component {
    render() {
        return <BrowserRouter>
             <Route path='/' component={AllRouter}/>
             </BrowserRouter>
    }
}
export default Main;