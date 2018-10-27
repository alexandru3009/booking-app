import React from 'react';
import './Services.css';

class Services extends React.Component {
    state= {
        services: 
            {
                servicename:"HairCut",
                servicedescription:"Choose anything you wish",
                serviceduration:"30 minutes",
                servicespaces:"",
                serviceprice:"20 lei"
            }
        
    }
    render() {
        return (
            <div className="c-services-form">  
                <h1>Services</h1> 
                <h3>{this.state.services.servicename}</h3>
                <p>{this.state.services.servicedescription}</p>
                <p>Duration: {this.state.services.serviceduration}</p>
                <p>Price:{this.state.services.serviceprice}</p>
            </div>
        );
    }
}

export default Services;