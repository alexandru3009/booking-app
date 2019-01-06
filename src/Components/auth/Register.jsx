import React from 'react';
import './Auth.css';
import { Link, withRouter } from 'react-router-dom';
import { auth,db } from '../../firebase/index';

const AdminRegister = ({history}) => (
  <div>
    
    <RegisterForm history={history}/>
    
  </div>
)




class RegisterForm extends React.Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    iAgree:false,
    error :null,
    passType:'password',
    errorFirstName:"",
    errorLastName:"",
    errorPassword:"",
    errorEmail:""
  }

  
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  };

  ValidateFirstName = () => {
    const {firstName} = this.state; 
    let errorFirstName="";
    if(firstName.length <= 3 )
      {
        errorFirstName= "Invalid name";

      }
      if(errorFirstName) {
        this.setState({errorFirstName})
        return false;
      }
      return true;
  }
  ValidateLastName = () => {
    const {lastName} = this.state; 
    let errorLastName="";
    if(lastName.length <= 3 || lastName.length > 20)
      {
        errorLastName= "Invalid  last name";
      }
      if( errorLastName ) {
        this.setState({ errorLastName })
        return false;
      }
      return true;
  }
  


ValidatePassword = () => {
  const {passwordOne} =this.state;
  let errorPassword = "";
  if (passwordOne.length < 12) 
  {
    errorPassword = "Password must contain at least 12 characters: an Upper case,lower case,number and non alpha numeric !"; 
  }
  const hasUpperCase = /[A-Z]/.test(passwordOne);
  const hasLowerCase = /[a-z]/.test(passwordOne);
  const hasNumbers = /\d/.test(passwordOne);
  const hasNonalphas = /\W/.test(passwordOne);
  if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 3) 
  {
    errorPassword = "Password must contain at least 12 characters: an Upper case,lower case,number and non alpha numeric !"
  }

  if(errorPassword) 
    {
    this.setState({errorPassword});
    return false;
    }
return true;
}

ValidateEmail = () => {
  const {email} =this.state;
  let errorEmail="";
  const testEmail = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
  if(!testEmail)
    {  
      errorEmail="Please input a valid email"; 
    }

    if(errorEmail) 
    {
      this.setState({errorEmail});
      return false;
    }
    return true;
}

isNotValid = () => {
  const isFirstNameValid = this.ValidateFirstName();
  const isLastNameValid = this.ValidateLastName();
  const isPasswordValid = this.ValidatePassword();
  const isEmailValid = this.ValidateEmail();
  if(!isFirstNameValid || !isLastNameValid || !isPasswordValid || !isEmailValid ) 
  { return false; 
  }
  return true;
}
  
  onSubmit = (e) => {
    e.preventDefault();
    
    const { firstName,lastName,email,passwordOne} =this.state;

    const isValid = this.isNotValid();

    if(isValid) { 
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      //auth.doEmailVerification(email).then(() => {
      db.doCreateUser(authUser.user.uid,firstName,lastName,email)
        this.setState({ ...this.state });
        this.props.history.push("/login");
        auth.doSignOut();
      })
    //})
      .catch(error => {
        this.setState({error});
      });
    }
  }
    showHide = (e) => {
      e.preventDefault();
      this.setState({
        passType:this.state.passType === 'input' ? 'password' : 'input'
      })
    }
  

  render() {
    const { firstName,lastName,email,passwordOne,passwordTwo,iAgree,error } = this.state;
    const { passType,errorFirstName,errorLastName,errorEmail,errorPassword } = this.state;

    const isInvalid = (
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' || 
    firstName === '' ||
    lastName === '' ||
    iAgree === false
    );

    return (
      
      
      <form onSubmit={this.onSubmit} className="c-auth-form">
      <h1>Create your account </h1>
      {error && <p className="e-error">{error.message}</p>}
      <span>First name</span>
        <div>
          <label htmlFor="firstname">
            <input 
            className="i-input-auth"
            type="text"  
            name="firstName"
            value={firstName} 
            placeholder="First name" 
            onChange={this.onChange}/>
          </label>
        </div>
        <div className="e-error">{errorFirstName}</div>

        <span>Last name</span>
        <div>
          <label htmlFor="lastname">
            <input className="i-input-auth"
            name="lastName"
            type="text"  
            placeholder="Your lastname here"
            value={lastName}
            onChange={this.onChange}/>
          </label>
        </div>
        <div className="e-error">{errorLastName}</div>

        <span>Email</span>
        <div>
          <label>
            <input 
            className="i-input-auth"
            name="email"
            type="email" 
            placeholder="Your email here"
            value={email}
            onChange={this.onChange}/>
          </label>
        </div>
          <div className="e-error">{errorEmail}</div>

          <span>Password</span>
        <div>
          <label>
            <input
            className="i-input-auth"
            name="passwordOne"
            type={passType}
            placeholder="Your password here" 
            value={passwordOne}
            onChange={this.onChange}/>
            <button  onClick={this.showHide} className="button-show-hide">
            {passType === 'input' ? 'Hide' : 'Show'}
            </button>
          </label>
        </div>
        <span className="password-condition">Password must contain at least 12 characters.</span>
        <div className="e-error">{errorPassword}</div>

        <span>Repeat Password</span>
        <div>
          <label>
            <input 
            className="i-input-auth"
            name="passwordTwo"
            type={passType}
            placeholder="Confirm password" 
            value={passwordTwo}
            onChange={this.onChange}/>
            
          </label>
        </div>

        <div>
          <label>
            <span><em>I agree with terms and conditions</em></span>
            <input type="checkbox" 
            name="iAgree"
            value={iAgree}
            onChange={this.onChange}
            />
          </label>
        </div>

        
        <button  disabled={isInvalid} type="submit" className="button-auth">
          Register
        </button>
        <br />
        <Link to="/login">Already have an account ?</Link>
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

