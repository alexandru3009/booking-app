import React from 'react';
import AdminChangePassword from '../auth/ChangePassword';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';

class AccountPage extends React.Component {
    render() {
        return (
            <AuthUserContext.Consumer>
            {authUser =>
                <React.Fragment>
                <h4>Email:{authUser.email}</h4>
                <h5>ID:{authUser.uid}</h5>
                <AdminChangePassword history={this.props.history} />
                </React.Fragment>
            }
            </AuthUserContext.Consumer>
        );
    }
}
    

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccountPage);