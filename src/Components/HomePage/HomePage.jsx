import React from 'react';
import { db } from '../../firebase/firebase';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            companies:[]
        }
    }
    
    componentDidMount() {
        const companiesRef = db.ref('companies');
        console.log(this.state.description)
        companiesRef.on('value',(snapshot) => {
          let companies = snapshot.val();
          let newState = [];
          for(let company in companies) {
            newState.push({
              id:company,
              companyDescription: companies[company].companyDescription,
              companyName:companies[company].companyName,
              userId:companies[company].user
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

    render() {
        return (
            <AuthUserContext.Consumer>
                {context => 
                <React.Fragment>
                <div>
                    <h1>This is my Home Page !</h1>
                        <p>{context.authUser.uid}</p>
                    <ul>    {this.state.companies.map((company) => {
                                  return (
                                    <div key={company.id}>
                                    {company.userId === context.authUser.uid ?
                                    <div><li>
                                      <p>Company ID:{company.id}</p>
                                      <h3>Description:{company.companyDescription}</h3>
                                      <h3>Name:{company.companyName}</h3>
                                      <h4>User ID:{company.userId}</h4>
                                      <button onClick={() => this.removeCompany(company.id)}>Remove Item</button>
                                    </li></div> : null }
                                    </div>
                                  )})} </ul>
                    <p>Home page for anyone is signed in!</p>
                    <button onClick={this.addCompany}>Add company</button>
                </div>
                </React.Fragment>}
            </AuthUserContext.Consumer>
                    );
        }
    }

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(HomePage);