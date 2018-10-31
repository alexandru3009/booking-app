import React from 'react';
import Register from './AdminRegister/AdminRegister';
import AdminLogin from './AdminLogin/AdminLogin';

class AdminRegister extends React.Component {
    state = {
      fields: {}
    }
    
    
    onSubmit = (fields) => {
      this.setState({ fields });
      console.log('Admin register has:',fields)
    }
  
    
    render() {
      return (
        <div>
          <Register onSubmit = {fields => this.onSubmit(fields)}/>
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
          <AdminLogin fields= {this.state.fields}/>
        </div>
      )
    }
  }

  export default AdminRegister;