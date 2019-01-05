import React from 'react';
import { db } from '../../firebase/firebase';


class LandingPage extends React.Component {
    state = {
        companies:[]
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
              companyName:companies[company].companyName
            });
          }
          this.setState({
            companies:newState
          })
        })
    }

    render() {
        return (
            <div>
                    <ul>    {this.state.companies.map((company) => {
                                  return (
                                    <div key={company.id}>
                                    <li>
                                        <h3>Name:{company.companyName}</h3>
                                        <p>Description:{company.companyDescription}</p>
                                    </li> 
                                    </div>
                                  )})} </ul>
                </div>
        )
    }
};

export default LandingPage;