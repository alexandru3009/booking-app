import React from 'react';
import './AdminLogin.css';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  Change = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    
    this.setState({ [e.target.name] : e.target.name });
    console.log(this.state);
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if(email === this.props.fields.email && password === this.props.fields.password) 
    {
      console.log('You are now logged in !');
    } else {
      console.log('Try again ')
    }
  }

  
  render() {
    return (
      <div>
        <h1>Admin Login</h1>
        <form onSubmit={this.handleLogin} className="c-login-form">
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" value={this.state.email} placeholder="email" onChange={e => this.Change(e)} />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password"  placeholder="password" />
          </label>
        </div>

        <button variant="contained" color="primary" >
          Login
        </button>
        </form>
        <div>
          <p>{this.props.fields.firstName}</p>
        </div>
        
        </div>
    );
  }
}

export default AdminLogin;