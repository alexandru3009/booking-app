import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Navigation from '../Components/Navigation/Navigation';
import AdminLogin from '../Components/auth/Login';
import AdminRegister from '../Components/auth/Register';
import AdminRecoverPassword from '../Components/auth/Recover';
import LandingPage from '../Components/LandingPage/LandingPage';
import HomePage from '../Components/HomePage/index';
import AccountPage from '../Components/AccountPage/AccountPage';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';
import withAuthentication from '../Components/Authentication/withAuthentication';

import Companies from '../Components/Companies/Companies'

export const history = createHistory();

const AppRouter = () => (
    <Router history ={history}>
        <div>
            <Navigation />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}  />
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={AdminLogin} />
                <Route path="/register" component={AdminRegister} />
                <Route path="/recover" component={AdminRecoverPassword} />
                <Route path="/account" component={AccountPage}/>
                <Route path="/addcompany" component={Companies}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default withAuthentication(AppRouter);