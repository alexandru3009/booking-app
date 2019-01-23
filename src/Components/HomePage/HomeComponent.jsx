import React from 'react';
import './styles.css';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCompany:undefined
        }
    }

    onChange = (e) => {
        
        this.setState({
            selectedCompany:e.target.value
        });
        console.log(this.state.selectedCompany)
    }

    addCompany = (e) => {
        e.preventDefault();
        this.props.history.push("/addcompany");
    }
    render() {
        return (
            <div className="companies">
                <div>
                    {this.state.selectedCompany === undefined && <p>Please select or add a new company</p>}
                    <select onChange={this.onChange.bind(this)} value={this.state.selectedCompany}>
                        <option>Please select a company</option>
                        {this.props.companies.map((company) => {
                            return (  
                                company.userId === this.props.authUserId ?
                                <option value={company.companyId} key={company.companyId}>{company.companyName}</option>
                            : null 
                            )
                        }
                        )}
                    </select>
                    <button onClick={this.addCompany}>Add company</button>
                </div>
                
                {this.props.companies.map((company) => {
                    return (
                        <div key={company.companyId}>
                            {this.state.selectedCompany === company.companyId ?
                                <div>
                                    <h3>Name:{company.companyName}</h3>
                                    <p>Company ID:{company.companyId}</p>
                                    <h3>Description:{company.companyDescription}</h3>
                                    <h4>User ID:{company.userId}</h4>
                                    <div button="remove--item">
                                    <button onClick={() => this.props.removeCompany(company.companyId)}>Remove company</button>
                                    </div>
                                    <button onClick={() => this.addService(company.companyId)}>Add Service</button>
                                </div> : null
                            }
                        </div>
                    )
                })}
                
            </div>
        )
    }
};



export default HomeComponent;