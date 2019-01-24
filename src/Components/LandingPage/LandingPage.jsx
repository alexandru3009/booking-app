import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import "./styles.css";


const LandingPage = () => ( 
            <AuthUserContext.Consumer>
                {context => 
                <React.Fragment>
                    
                    <table className="table">
                        <TableHead />
                        {context.companies.map((company) => 
                            <TableBody key={company.companyId} companyId={company.companyId} companyName={company.companyName} services={context.services}/>
                            )}
                        
                    </table>
                
                </React.Fragment>
                }
            </AuthUserContext.Consumer>
)

const TableHead = () => (
    <thead>
        <tr>
            <td>Company</td>
            <td>Service</td>
            <td>Description</td>
            <td>Price</td>
        </tr>
    </thead>
);



class TableBody extends React.Component {
render() {
    const {companyId,companyName} = this.props;
return  (
        <tbody>
            {this.props.services.map((service) => {
                return  (
                    <tr key={service.serviceId}>{companyId === service.companyId ? 
                        <React.Fragment>
                            <td>{companyName}</td>
                            <td>{service.serviceName}</td>
                            <td>{service.serviceDescription}</td>
                            <td>{service.price} $</td>
                        </React.Fragment>
                         : null
                }</tr>
                )
                
            })}
            
        </tbody>
        )
    }
}

export default LandingPage;