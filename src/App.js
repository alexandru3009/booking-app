import React, { Component } from 'react';
import './App.css';
import AdminRegister from './Components/AdminRegister/AdminRegister';
import AdminLogin from './Components/AdminLogin/AdminLogin';

class App extends Component {
  render() {
    return (
      <section>
        <AdminRegister />
        <AdminLogin />
      </section>
    );
  }
}

export default App;
