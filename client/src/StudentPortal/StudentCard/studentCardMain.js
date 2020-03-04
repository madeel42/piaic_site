import React from 'react';
import { Route } from 'react-router-dom';

import StudentCard from './studentCard'
import StudentOtherSide from './studentCardOtherSide/otheSideCard'




class StudentCardMain extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => {
                    return <React.Fragment>

                    
                        
                   
                    <StudentCard />
                    <StudentOtherSide />

                    </React.Fragment>
                }
                }
                />
               


                
            </div>
        )
    }
}

export default StudentCardMain;