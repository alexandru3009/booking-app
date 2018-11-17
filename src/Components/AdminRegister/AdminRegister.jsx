import React from 'react';
import './AdminRegister.css';
import { Link, withRouter } from 'react-router-dom';
import { auth,db } from '../../firebase/index';

const AdminRegister = ({history}) => (
  <div>
    <h1>Sign Up</h1>
    <RegisterForm history={history}/>
  </div>
)


const byPropKey = (propertyName,value) => ({
  [propertyName] : value
})

class RegisterForm extends React.Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    iAgree:false,
    error :null,
    passType:'input'
  }

  
  Change = (e) => {
    this.setState(byPropKey(e.target.name,e.target.value));
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    const { firstName,lastName,email,passwordOne} =this.state;

    
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      db.doCreateUser(authUser.user.uid,firstName,lastName,email)
        this.setState({ ...this.state });
        this.props.history.push("/login");
        auth.doSignOut();
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    }

    showHide = (e) => {
      e.preventDefault();
      this.setState({
        passType:this.state.passType === 'input' ? 'password' : 'input'
      })
    }
  

  render() {

    const isInvalid = (
    this.state.passwordOne !== this.state.passwordTwo ||
    this.state.passwordOne === '' ||
    this.state.email === '' || 
    this.state.firstName === '' ||
    this.state.lastName === '' ||
    this.state.iAgree === false
    );

    return (
      <form onSubmit={this.onSubmit} className="c-register-form">
      {this.state.error && <p>{this.state.error.message}</p>}
        <div>
          <label htmlFor="firstname">
            <span>Firstname</span>
            <input 
            type="text"  
            name="firstName"
            value={this.state.firstName} 
            placeholder="First name" 
            onChange={e => this.Change(e)}/>
          </label>
        </div>
        
        <div>
          <label >
            <span>Last name</span>
            <input 
            name="lastName"
            type="text"  
            placeholder="Your lastname here"
            value={this.state.lastName}
            onChange={e => this.Change(e)}/>
          </label>
        </div>

        <div>
          <label>
            <span>Email</span>
            <input 
            name="email"
            type="email" 
            placeholder="Your email here"
            value={this.state.email}
            onChange={e => this.Change(e)}/>
          </label>
        </div>

        <div>
          <label>
            <span>Password</span>
            <input
            name="passwordOne"
            type={this.state.passType}
            placeholder="Your password here" 
            value={this.state.passwordOne}
            onChange={e => this.Change(e)}/>
            <button  onClick={this.showHide}>
            {this.state.passType === 'input' ? 'Hide' : 'Show'}
            </button>
          </label>
        </div>
        <div>
          <label>
            <span>Repeat Password</span>
            <input 
            name="passwordTwo"
            type={this.state.passType}
            placeholder="Confirm password" 
            value={this.state.passwordTwo}
            onChange={e => this.Change(e)}/>
            
            <button  onClick={this.showHide}>
            {this.state.passType === 'input' ? 'Hide' : 'Show'}
            </button>
          </label>
        </div>

        <div>
          <label>
            <span>I agree</span>
            <input type="checkbox" 
            name="iAgree"
            value={this.state.iAgree}
            onChange={e => this.Change(e)}
            />
          </label>
        </div>

        
        <button  disabled={isInvalid} type="submit">
          Sign Up
        </button>
       
      </form>
    );
  }
};

const RegisterLink = () => (
  <div>
     Don`t have an account?
    <Link to="/register">Click here !</Link>
  </div>
);

export default withRouter(AdminRegister);

export {  RegisterLink, RegisterForm };