import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminLogin from '../Components/auth/AdminLogin/AdminLogin';
import AdminRegister from '../Components/auth/AdminRegister/AdminRegister';
import LandingPage from '../Components/LandingPage/LandingPage';
import HomePage from '../Components/HomePage/HomePage';
import Navigation from '../Components/Navigation/Navigation';
import withAuthentication from '../Components/Authentication/withAuthentication';
import AdminRecoverPassword from '../Components/auth/AdminRecover/AdminRecover';
import AccountPage from '../Components/AccountPage/AccountPage';

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
            </Switch>
        </div>
    </Router>
);

//Higher order component
export default withAuthentication(AppRouter);