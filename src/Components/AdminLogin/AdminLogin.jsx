import React from 'react';
import './AdminLogin.css'
import { RegisterLink } from '../AdminRegister/AdminRegister';
import { auth } from '../../firebase/index';

const AdminLogin = ({history}) => (
  <div>
    <h1>Sign In</h1>
    <LoginForm history={history}/>
    <RegisterLink />
  </div>
)

const byPropKey = (propertyName, value) => () => ({
  [propertyName] : value
});


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      error: null
    }
  }
    
    onSubmit = (e) => {
      const {email,password} = this.state;
      e.preventDefault();
      auth.doSignInWithEmailAndPassword(email,password).then(() => {
        this.setState({ ...this.state });
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState(byPropKey('error',error));
      })
    }

    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

  render() {

    const isInvalid = 
    this.state.password === '' || this.state.email === '';
    return (
      <div>
        
        <form onSubmit={this.onSubmit} className="c-login-form">
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange} />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange}/>
          </label>
        </div>

        <button  type="submit" disabled={isInvalid} >
          Sign In
        </button>
        {this.state.error && <p>{this.state.error.message}</p>}
        </form>
        
        
        </div>
    );
  }
}

export default AdminLogin;