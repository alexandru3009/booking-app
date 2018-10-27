import React, { Component } from 'react';
import './App.css';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminRecover from './Components/AdminRecover/AdminRecover';
import AdminRegister from './Components/AdminRegister/AdminRegister';
import Companies from './Components/Companies/Companies';
import AdminAddCompany from './Components/Companies/AdminAddCompany/AdminAddCompany';
import Services from './Components/Services/Services';
import AdminAddServices from './Components/Services/AdminAddServices/AdminAddServices';


class App extends Component {
  render() {
    return (
      <section>
        <AdminRegister />
        <AdminLogin />
        <AdminRecover />
        <Companies />
        <AdminAddCompany />
        <Services />
        <AdminAddServices />
      </section>
    );
  }
}

export default App;
