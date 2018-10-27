import React from 'react';
import './AdminLogin.css';

class AdminLogin extends React.Component {
  render() {
    return (
      <form className="c-login-form">

        <div>
          <label htmlFor="email">
            <span>Surname</span>
            <input type="email" id="email" />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <span>Surname</span>
            <input type="password" id="password" />
          </label>
        </div>

        <button variant="contained" color="primary">
          Login
        </button>
      </form>
    );
  }
}

export default AdminLogin;
