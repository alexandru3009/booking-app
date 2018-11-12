import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import Register from '../Components/Admin/AdminRegister/AdminRegister';
import AdminLogin from '../Components/Admin/AdminLogin/AdminLogin';
import AdminRecover from '../Components/Admin/AdminRecover/AdminRecover';
import Navigation from '../Components/Navigation/Navigation';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={AdminLogin} />
                <Route path="/recover" component={AdminRecover} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;