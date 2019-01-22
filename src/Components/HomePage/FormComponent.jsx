import React from 'react';


class FormHomePage extends React.Component {

    addCompany = (e) => {
        e.preventDefault();
        this.props.history.push("/addcompany");
    }

    addService = (companyId) => {
        const valoare= this.props.addService(companyId);
        this.setState({ valoare })
        console.log(companyId)
        this.props.history.push("/addservice");
    }

    viewServices = (companyId) => {
        this.setState({
            selectedCompany:companyId
        })
        
        console.log(this.state.option)
    }

    clickMe = () => {
        console.log(this.state.option)
    }


    render() {
        
        return (
            <div>
                <h1>This is my Home Page !</h1>
                
                <p>{this.props.authUserId}</p>
                <ul>    {this.props.companies.map((company) => {
                            return (
                                <div key={company.companyId}>
                                    { company.userId === this.props.authUserId ?
                                        <div><li>
                                            <p>Company ID:{company.companyId}</p>
                                            <h3>Description:{company.companyDescription}</h3>
                                            <h3>Name:{company.companyName}</h3>
                                            <h4>User ID:{company.userId}</h4>
                                            <button onClick={() => this.props.removeCompany(company.companyId)}>Remove Item</button>
                                            <button onClick={() => this.addService(company.id)}>Add Service</button>
                                        </li></div> : null }
                                </div>
                            )
                        })} 
                </ul>
                <button onClick={this.addCompany}>Add company</button>
            </div>
        )
    }
}

export default FormHomePage;