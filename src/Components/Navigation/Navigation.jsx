import React from 'react';
import book from './book.svg';
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import SignOutButton from '../auth/Logout';
import AuthUserContext from '../Authentication/AuthUserContext';

const Navigation = () => (
    <AuthUserContext.Consumer>
        { context => 
            <div className="header-style">
                <h1>Booking application</h1>
                { context.authUser ? null : <img src={book} alt="book" />  }
                { context.authUser ? <NavigationAdmin/> : <NavigationPublic/> }
            </div> 
        } 
    </AuthUserContext.Consumer>
);

const NavigationAdmin = () => (
    <header>
        <div>
            <NavLink to="/home" activeClassName="is-active" >Home</NavLink>
            <NavLink to="/account" activeClassName="is-active"> Account</NavLink>
            <NavLink to="/addservices" activeClassName="is-active">Add service</NavLink>
            <NavLink to="/addcompany" activeClassName="is-active">Add company</NavLink>
            <SignOutButton />
        </div>
    </header>
);
const NavigationPublic = () => (
    <header>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/register" activeClassName="is-active">Register account</NavLink>
        <NavLink to="/login" activeClassName="is-active">Login</NavLink>
        <NavLink to="/recover" activeClassName="is-active">  Recover Password  </NavLink>
    </header>
);


export default Navigation;
