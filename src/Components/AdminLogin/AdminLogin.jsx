import React from 'react';
import './AdminLogin.css'
import { RegisterLink } from '../AdminRegister/AdminRegister';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';

const AdminLogin = ({history}) => (
  <div>
    <h1>Sign In</h1>
    <LoginForm history={history}/>
    <RegisterLink />
    
    <Link to="/recover">Forgot password?</Link>
  </div>
)



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
        this.setState({error});
      })
    }

    onChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

  render() {
    const { email,password,error } = this.state;
    const isInvalid = 
    ( password === '' || email === '' );
    return (
      <div>
        
        <form onSubmit={this.onSubmit} className="c-login-form">
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" value={email} placeholder="email" onChange={this.onChange} />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password" value={password} placeholder="password" onChange={this.onChange}/>
          </label>
        </div>

        <button  type="submit" disabled={isInvalid} >
          Sign In
        </button>
        {error && <p>{error.message}</p>}
        </form>
        
        </div>
    );
  }
}

export default AdminLogin;