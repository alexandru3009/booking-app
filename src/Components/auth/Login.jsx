import React from 'react';
import './Auth.css'
import { RegisterLink } from './Register';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';

const AdminLogin = ({history}) => (
  <div>
    
    <LoginForm history={history}/>
    
  </div>
)



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      error: null,
      errorLogin:"",
      errorForgotPassword:"",
      passType:"password"
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
        let errorLogin="";
        let errorForgotPassword="";
        //Here we changed firebase generic errors
        if(error.code==='auth/wrong-password') {
          errorForgotPassword = " Forgot password?"
        } else
        errorLogin="There is no such user in our database ! Please enter a valid email or register !";
        if(errorLogin) {
          this.setState({errorLogin})
        };
        if(errorForgotPassword) {
          this.setState({errorForgotPassword})
        };
      })
    }

    onChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

    showHide = (e) => {
      e.preventDefault();
      this.setState({
        passType:this.state.passType === 'input' ? 'password' : 'input'
      })
    }

  render() {
    const { email,password,errorLogin,passType,errorForgotPassword } = this.state;
    const isInvalid = 
    ( password === '' || email === '' );
    return (
      <div className="c-auth-form">

        <h1>Login</h1>
        { errorLogin && <p className="e-error">{errorLogin}</p> }
        {errorForgotPassword && <Link to="/recover">{errorForgotPassword}</Link>}
        <form onSubmit={this.onSubmit} >
        <span>Email</span>
        <div>
          <label htmlFor="email">
            <input type="email" name="email" value={email} placeholder="email" onChange={this.onChange} className="i-input-auth" />
          </label>
        </div>

        <span>Password</span>
        <div>
          <label htmlFor="password"> 
            <input type={passType} name="password" value={password} placeholder="password" onChange={this.onChange} className="i-input-auth" width="20%"/>
          </label>
            <button  onClick={this.showHide} className="button-show-hide">
            {passType === 'input' ? 'Hide' : 'Show'}
            </button>
        </div>

        

        <button  type="submit" disabled={isInvalid} className="button-auth" >
          Login
        </button>
        <div><label>
        <RegisterLink />
        
        </label>
        </div>
        </form>
        
        </div>
    );
  }
}

export default AdminLogin;