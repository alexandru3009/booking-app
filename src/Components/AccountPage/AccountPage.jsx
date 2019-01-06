import React from 'react';
import './AccountPage.css';
import AdminChangePassword from '../auth/ChangePassword';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';
import { db } from '../../firebase/firebase';

class AccountPage extends React.Component {
    state = {
        users:[]
    }

    componentDidMount() {
        const usersRef = db.ref('users');
        console.log(this.state.description)
        usersRef.on('value',(snapshot) => {
          let users = snapshot.val();
          let newState = [];
          for(let user in users) {
            newState.push({
              id:user,
              lastName: users[user].lastName,
              firstName:users[user].firstName
            });
          }
          this.setState({
            users:newState
          })
        })
    }


    render() {
        return (
            <AuthUserContext.Consumer>
            {authUser =>
                <React.Fragment>
                <div className="account-data">
                       {this.state.users.map((user) => {
                                  return (
                                    <div key={user.id}>
                                    {user.id === authUser.uid ?
                                    <div>
                                      <h3><em>Last name:</em> {user.lastName} </h3>
                                      <h3><em>First name:</em> {user.firstName} </h3>
                                      <h4><em>Email:</em> {authUser.email} </h4>
                                      <h4><em>User ID:</em> {user.id} </h4>
                                    </div> : null }
                                    </div>
                                  )})} 
                </div>
                
                <AdminChangePassword history={this.props.history} />
                </React.Fragment>
            }
            </AuthUserContext.Consumer>
        );
    }
}
    

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccountPage);