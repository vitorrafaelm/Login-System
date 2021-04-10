import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp'; 
import ChangePassword from '../pages/ChangePassword'; 
import EmailSended from '../pages/EmailSended'; 
import Home from '../pages/Home'; 
import successfullyRegistered from '../pages/successfulyRegistered'; 

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact={true} component={SignIn}/>
                <Route  path="/register" component={SignUp}/>
                <Route  path="/changePassword" component={ChangePassword}/>
                <Route path="/emailSended" component={EmailSended} />
                <Route  path="/successfullyRegistered" component={successfullyRegistered}/>
                <Route  path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default routes; 