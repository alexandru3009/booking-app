import React from 'react';
import './AccountPage.css';
import AdminChangePassword from '../auth/ChangePassword';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';

const AccountPage = (props) => (
            <AuthUserContext.Consumer>
            {context =>
                <React.Fragment>
                <div className="account-data">
                  {context.users.map((user) => {
                    return (
                      <div key={user.id}>
                      { user.id === context.authUser.uid ?
                      <div>
                        <h3><em>Last name:</em> {user.lastName} </h3>
                        <h3><em>First name:</em> {user.firstName} </h3>
                        <h4><em>Email:</em> {context.authUser.email} </h4>
                        <h4><em>User ID:</em> {user.id} </h4>
                      </div> : null }
                      </div>
                    )})} 
                </div>
                
                <AdminChangePassword history={props.history} />
                </React.Fragment>
            }
            </AuthUserContext.Consumer>
        );
    

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccountPage);