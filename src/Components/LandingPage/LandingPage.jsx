import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';


const LandingPage = () => ( 
            <AuthUserContext.Consumer>
                {context => 
                <React.Fragment>
                    
                    <ul>    {context.companies.map((company) => {
                        return (
                        <div key={company.companyId}>
                            <li>
                                <h3>Name:{company.companyName}</h3>
                                <p>Description:{company.companyDescription}</p>
                            </li> 
                        </div>
                        )})} 
                    </ul>
                
                </React.Fragment>
                }
            </AuthUserContext.Consumer>
)

export default LandingPage;