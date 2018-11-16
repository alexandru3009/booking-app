import React from 'react';
import AdminChangePassword from '../AdminChangePassword/AdminChangePassword';
import AuthUserContext from '../Authentication/AuthUserContext';

const AccountPage = ({ history }) => (
    <AuthUserContext.Consumer>
    {authUser =>
        <div>
        <h4>Email:{authUser.email}</h4>
        <AdminChangePassword history={history} />
        </div>
    }
    </AuthUserContext.Consumer>
);

export default AccountPage;