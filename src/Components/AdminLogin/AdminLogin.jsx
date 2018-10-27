import React from 'react';
import './AdminLogin.css';

class AdminLogin extends React.Component {

  handleLogin = (event) => {
    event.preventDefault();
    console.log("Admin Login");
  }
  render() {
    return (
      <form className="c-login-form">
        <h1>Admin Login</h1>
        <div>
          <label htmlFor="email">
            <span>Surname</span>
            <input type="email" id="email2" />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password2" />
          </label>
        </div>

        <button variant="contained" color="primary" onClick={this.handleLogin}>
          Login
        </button>
      </form>
    );
  }
}

export default AdminLogin;
