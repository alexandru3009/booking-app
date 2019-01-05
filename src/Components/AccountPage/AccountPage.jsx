import React from 'react';
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
                <div>
                    
                    <ul>    {this.state.users.map((user) => {
                                  return (
                                    <div key={user.id}>
                                    {user.id === authUser.uid ?
                                    <div><li>
                                      <p>Company ID:{user.id}</p>
                                      <h3>Description:{user.lastName}</h3>
                                      <h3>Name:{user.firstName}</h3>
                                      <h4>User ID:{user.id}</h4>
                                    </li></div> : null }
                                    </div>
                                  )})} </ul>
                    <p>Home page for anyone is signed in!</p>
                    <button onClick={this.addCompany}>Add company</button>
                </div>
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