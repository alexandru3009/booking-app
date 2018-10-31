import React from 'react';
import './AdminRegister.css';



class Register extends React.Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    iAgree:false
  }

  
  Change = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      iAgree:false
    })
  }

  

  render() {
    return (
      <form className="c-register-form">
        <h1>Admin Register</h1>
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
            name="password"
            type="password"  
            placeholder="Your password here" 
            value={this.state.password}
            onChange={e => this.Change(e)}/>
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

        <button variant="contained" color="primary" onClick={e => this.onSubmit(e)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Register;