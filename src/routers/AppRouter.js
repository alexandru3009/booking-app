import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminLogin from '../Components/AdminLogin/AdminLogin';
import AdminRegister from '../Components/AdminRegister/AdminRegister';
import LandingPage from '../Components/LandingPage/LandingPage';
import HomePage from '../Components/HomePage/HomePage';
import Navigation from '../Components/Navigation/Navigation';
import withAuthentication from '../Components/Authentication/withAuthentication';
import AdminRecover from '../Components/AdminRecover/AdminRecover';

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
                <Route path="/recover" component={AdminRecover} />
            </Switch>
        </div>
    </Router>
);


export default withAuthentication(AppRouter);