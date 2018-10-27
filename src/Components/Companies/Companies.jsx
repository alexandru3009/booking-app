import React from 'react';
import './Companies.css';

class Companies extends React.Component {
    state={
        companies: 
        {   id:1,
            companylog:"",
            companyname:"BarberShop",
            companydescription:"A place where you can have a haircut",

        }
    
    }
    
    render() {
        return (
            <div className="c-companies-form">
                <h1>Companies</h1>
                <p>{this.state.companies.companyname}</p>
                <p>{this.state.companies.companydescription}</p>
            </div>
        )
    }
}

export default Companies;