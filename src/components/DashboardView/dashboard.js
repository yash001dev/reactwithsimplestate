import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Nav } from './navbar';
import Home from './home';
import Details from './details';
import Education from './education';
import EducationWithSimpleState from './educationWithSimpleState';

const Dashboard = (props) => {
    const authEmail=props.match.params.email
    return (
        <Router>
            <div>
               <Nav email={authEmail} />
               <Switch>
                    <Route path='/dashboard' exact render={()=><Home email={authEmail}/>}/>
                    <Route path='/dashboard/details' exact render={()=><Details email={authEmail}/>}/>
                    <Route path='/dashboard/education' exact render={()=><Education email={authEmail}/>}/>
                    <Route path="/dashboard/educationwithsimplestate" exact render={()=><EducationWithSimpleState email={authEmail} />}/>
               </Switch>
            </div>
        </Router>
    )
}




export default Dashboard
