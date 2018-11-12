import React, { Component } from 'react';
import './App.css';
import AdminRecover from './Components/Admin/AdminRecover/AdminRecover';
import Admin from './Components/Admin/Admin';
import Companies from './Components/Companies/Companies';
import AdminAddCompany from './Components/Companies/AdminAddCompany/AdminAddCompany';
import Services from './Components/Services/Services';
import AdminAddServices from './Components/Services/AdminAddServices/AdminAddServices';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    );
  }
}
// <Admin />
//       <AdminRecover />
//       <Companies />
//       <AdminAddCompany />
//       <Services />
//       <AdminAddServices />

export default App;
