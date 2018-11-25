import React from 'react';
import withAuthorization from '../Authentication/withAuthorization';

const HomePage = () => (
    <div>
        <h1>This is my Home Page !</h1>
        <p>Home page for anyone is signed in!</p>
    </div>
);

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(HomePage);