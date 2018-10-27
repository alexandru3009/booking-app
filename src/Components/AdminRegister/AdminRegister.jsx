import React from 'react';
import './AdminRegister.css';

class AdminRegister extends React.Component {
  state= {
    register :[
      {
        firstname:"Alexandru",
        surname:"Dascalescu",
        email:"alexandru.dascalescu90@gmail.com",
        password:"",
        Iagree:false
      }
    ]
  }
  submit = (event) => {
    event.preventDefault();
    console.log('Admin Register');
  }
  render() {
    return (
      <form className="c-register-form">
        <h1>Admin Register</h1>
        <div>
          <label htmlFor="surname">
            <span>Surname</span>
            <input type="text"  id="surname" />
          </label>
          
        </div>
        
        <div>
          <label >
            <span>First name</span>
            <input type="text" id="firstname"/>
          </label>
        </div>

        <div>
          <label>
            <span>Email</span>
            <input type="email" id="email"/>
          </label>
        </div>

        <div>
          <label>
            <span>Password</span>
            <input type="password" id="password" />
          </label>
        </div>

        <div>
          <label>
            <span>I agree</span>
            <input type="checkbox" id="Iagree"/>
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
