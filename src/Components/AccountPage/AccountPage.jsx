import React from 'react';
import AdminChangePassword from '../auth/AdminChangePassword/AdminChangePassword';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';

const AccountPage = ({ history }) => (
    <AuthUserContext.Consumer>
    {authUser =>
        <div>
        <h3>First Name:</h3>
        <h4>Email:{authUser.email}</h4>
        <AdminChangePassword history={history} />
        </div>
    }
    </AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccountPage);