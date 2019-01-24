import React from 'react';
import './styles.css';
import AddService from '../Services/AddService';
import { db } from '../../firebase/firebase';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCompany:undefined,
            option:undefined
        }
    }

    onChange = (e) => {
        
        this.setState({
            selectedCompany:e.target.value
        });
    }

    addCompany = (e) => {
        e.preventDefault();
        this.props.history.push("/addcompany");
    }

    addService = (e) => {
        this.setState({
            option:this.state.selectedCompany
        })
    }

    goBack = () => {
        this.setState({
            option:undefined
        })
    }

    editService = (serviceId) => {
        console.log("Edit service in progress",serviceId)
    }

    removeService = (serviceId) => {
        const serviceRef = db.ref(`/services/${serviceId}`);
        serviceRef.remove();
    }
    render() {
        return (
            <div >
                <div className="companies">

                    {this.state.selectedCompany === undefined && <p className="no-company"><em>Please select or add a new company</em></p>}
                    <div >
                    <select onChange={this.onChange.bind(this)} value={this.state.selectedCompany} className="select-button">
                        <option>Please select a company</option>
                        {this.props.companies.map((company) => {
                            return (  
                                company.userId === this.props.authUserId ?
                                <option value={company.companyId} key={company.companyId} >{company.companyName}</option>
                                
                            : null 
                            )
                        }
                        )}
                    </select>
                    </div>
                    <button onClick={this.addCompany} className="add-company">Add company</button>
                </div>
                
                {this.props.companies.map((company) => {
                    return (
                        <div key={company.companyId}>
                            {this.state.selectedCompany === company.companyId ?
                                <div>
                                    <div className="account-data">
                                        <h3 className="header">{company.companyName}</h3>
                                        <p className="id">{company.companyId}</p>
                                        <h3 className="description">{company.companyDescription}</h3>
                                        <button onClick={() => this.props.removeCompany(company.companyId)} className="remove-company"><b>Remove company</b></button>
                                        <button onClick={this.addService} className="add-service"><b>Add Service</b></button>
                                    </div>
                                    <table className="table"> 
                                        <thead>
                                            <tr>
                                                <th>Service</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Duration</th>
                                                <th>Spaces</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.services.map((service) => {
                                            return (
                                                <tr key={service.serviceId}>
                                                    {service.companyId === company.companyId ?
                                                        <React.Fragment>
                                                            <td>{service.serviceName}</td>
                                                            <td>{service.serviceDescription}</td>
                                                            <td>{service.price} $</td>
                                                            <td>{service.duration}</td>
                                                            <td>{service.spaces}</td>
                                                            <td >
                                                            <button onClick={() =>this.editService(service.serviceId)} className="edit">Edit</button>
                                                            <button onClick={() =>this.removeService(service.serviceId)} className="remove">Remove</button>
                                                            </td>
                                                        </React.Fragment>
                                                    : null
                                                    }  
                                                </tr>
                                        )
                                        })}
                                        </tbody>
                                    </table>
                                    </div>
                                 : null
                            }
                            <AddService goBack={this.goBack}
                           selectedCompany={this.state.option}/>
                        </div>
                    )
                })} 
                
                
            </div>
        )
    }
};



export default HomeComponent;