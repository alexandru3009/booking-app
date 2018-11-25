import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from '../AdminSignOut/SignOut';
import AuthUserContext from '../Authentication/AuthUserContext';

const Navigation = ({ authUser }) => (
    <header>
        <div>
            <h1>Booking application</h1>    
            <AuthUserContext.Consumer>
                { authUser => authUser ? <NavigationAuth/> : <NavigationNonAuth/> }
            </AuthUserContext.Consumer>
        </div>
    </header>
);

const NavigationAuth = () => (
    <header>
        <div>
            <NavLink to="/home" activeClassName="is-active" >Home     </NavLink>
            <NavLink to="/account" activeClassName="is-active"> Account</NavLink>
            <SignOutButton />
        </div>
    </header>
);
const NavigationNonAuth = () => (
    <header>
        <NavLink to="/" activeClassName="is-active">Home</NavLink>
        <NavLink to="/register" activeClassName="is-active">  Register account  </NavLink>
        <NavLink to="/login" activeClassName="is-active">Login</NavLink>
        <NavLink to="/recover" activeClassName="is-active">  Recover Password  </NavLink>
    </header>
);


export default Navigation;
