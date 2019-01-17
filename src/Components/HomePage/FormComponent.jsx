import React from 'react';
import { db } from '../../firebase/firebase';

class FormHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companies:[]
        }
        this.removeCompany = this.removeCompany.bind(this);
    }

    componentDidMount() {
        const companiesRef = db.ref('companies');
        companiesRef.on('value',(snapshot) => {
          let companies = snapshot.val();
          let newState = [];
          for(let company in companies) {
            newState.push({
              id:company,
              companyDescription: companies[company].companyDescription,
              companyName:companies[company].companyName,
              userId:companies[company].userId,
              selectedCompany:this.props.selectedCompany
            });
          }
          this.setState({
            companies:newState
          })
        })
    }

    addCompany = (e) => {
        e.preventDefault();
        this.props.history.push("/addcompany");
    }

    removeCompany = (companyId) => {
        const companyRef = db.ref(`/companies/${companyId}`);
        companyRef.remove();
    }

    addService = (companyId) => {
        this.setState({
            selectedCompany:this.state.selectedCompany
        });
        this.props.history.push("/addservice");
    }

    render() {
        
        return (
            <div>
                <h1>This is my Home Page !</h1>
                <p>{this.props.authUser.uid}</p>
                <ul>    {this.state.companies.map((company) => {
                            return (
                                <div key={company.id}>
                                {company.userId === this.props.authUser.uid ?
                                    <div><li>
                                        <p>Company ID:{company.id}</p>
                                        <h3>Description:{company.companyDescription}</h3>
                                        <h3>Name:{company.companyName}</h3>
                                        <h4>User ID:{company.userId}</h4>
                                        <button onClick={() => this.removeCompany(company.id)}>Remove Item</button>
                                        <button onClick={() => this.addService(company.id)}>Add Service</button>
                                    </li></div> : null }
                                    </div>
                            )})} </ul>
                
                <button onClick={this.addCompany}>Add company</button>
            </div>
        )
    }
}

export default FormHome;