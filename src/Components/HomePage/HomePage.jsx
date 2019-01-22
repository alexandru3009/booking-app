import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';

    class HomePage extends React.Component {
        constructor(props) {
            super(props)
            this.state ={
                option:undefined
            }
        }
    

    addCompany = (e) => {
        e.preventDefault();
        this.props.history.push("/addcompany");
    }

    addService = (companyId) => {
        this.setState({
            selectedCompany:companyId
        });
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
        <AuthUserContext.Consumer>
                {context =>
                    <React.Fragment>
                        <div>
                            
                            <h1>This is my Home Page !</h1>
                            <p>{context.authUser.uid}</p>
                                
                            <ul>    {context.companies.map((company) => {
                                return (
                                    <div key={company.companyId} className="display-companies">
                                        { (company.userId === context.authUser.uid) ?
                                            <div><li> 
                                                <p>Company ID:{company.companyId}</p>
                                                <h3>Description:{company.companyDescription}</h3>
                                                <h3>Name:{company.companyName}</h3>
                                                <h4>User ID:{company.userId}</h4>
                                                <button onClick={() => context.removeCompany(company.companyId)}>Remove Item</button>
                                                <button onClick={() => context.addService(company.companyId)}>Add Service</button>
                                            </li></div> : null }
                                    </div>
                                )
                            })} 
                            </ul>
                            {this.state.option && <p>{this.state.option}</p>}
                            <button onClick={this.addCompany}>Add company</button>
                        </div>
                    </React.Fragment>
                }
        </AuthUserContext.Consumer>
        );
    }
}



const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(HomePage);