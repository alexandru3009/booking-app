import React from 'react';
import './AdminRegister.css';
import { Link, withRouter } from 'react-router-dom';
import { auth,db } from '../../../firebase/index';

const AdminRegister = ({history}) => (
  <div>
    <h1>Sign Up</h1>
    <RegisterForm history={history}/>
    <Link to="/login">Already have an account ?</Link>
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
    passType:'input',
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
  if (passwordOne.length < 8) 
  {
    errorPassword = "Password must contain at least 8 characters: an Upper case,lower case,number and non alpha numeric !"; 
  }
  const hasUpperCase = /[A-Z]/.test(passwordOne);
  const hasLowerCase = /[a-z]/.test(passwordOne);
  const hasNumbers = /\d/.test(passwordOne);
  const hasNonalphas = /\W/.test(passwordOne);
  if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 3) 
  {
    errorPassword = "Password must contain at least 8 characters: an Upper case,lower case,number and non alpha numeric !"
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

    const isInvalid = this.isNotValid();

    if(isInvalid) { 
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
      <form onSubmit={this.onSubmit} className="c-register-form">
      {error && <p>{error.message}</p>}
        <div>
          <label htmlFor="firstname">
            <span>Firstname</span>
            <input 
            type="text"  
            name="firstName"
            value={firstName} 
            placeholder="First name" 
            onChange={this.onChange}/>
          </label>
        </div>
        <div className="e-error">{errorFirstName}</div>
        
        <div>
          <label >
            <span>Last name</span>
            <input 
            name="lastName"
            type="text"  
            placeholder="Your lastname here"
            value={lastName}
            onChange={this.onChange}/>
          </label>
        </div>
        <div className="e-error">{errorLastName}</div>
        <div>
          <label>
            <span>Email</span>
            <input 
            name="email"
            type="email" 
            placeholder="Your email here"
            value={email}
            onChange={this.onChange}/>
          </label>
        </div>
          <div className="e-error">{errorEmail}</div>
        <div>
          <label>
            <span>Password</span>
            <input
            name="passwordOne"
            type={passType}
            placeholder="Your password here" 
            value={passwordOne}
            onChange={this.onChange}/>
            <button  onClick={this.showHide}>
            {passType === 'input' ? 'Hide' : 'Show'}
            </button>
          </label>
        </div>
        <div className="e-error">{errorPassword}</div>
        <div>
          <label>
            <span>Repeat Password</span>
            <input 
            name="passwordTwo"
            type={passType}
            placeholder="Confirm password" 
            value={passwordTwo}
            onChange={this.onChange}/>
            
            <button  onClick={this.showHide}>
            {passType === 'input' ? 'Hide' : 'Show'}
            </button>
          </label>
        </div>

        <div>
          <label>
            <span>I agree</span>
            <input type="checkbox" 
            name="iAgree"
            value={iAgree}
            onChange={this.onChange}
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