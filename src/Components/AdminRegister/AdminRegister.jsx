import React from 'react';
import './AdminRegister.css';

class AdminRegister extends React.Component {

  submit = (event) => {
    event.preventDefault();
    console.log('hello');
  }
  render() {
    return (
      <form className="c-register-form">
        <div>
          <label htmlFor="surname">
            <span>Surname</span>
            <input type="text" id="surname" />
          </label>
        </div>

        <button variant="contained" color="primary" onClick={this.submit}>
          Submit
        </button>
      </form>
    );
  }
}

export default AdminRegister;
