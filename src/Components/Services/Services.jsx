import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import AddServices from './AddServices';

const Services = () => {
    return (
        <AuthUserContext.Consumer>
            {context => 
                <AddServices selectedCompany={context.selectedCompany} />
            }
        </AuthUserContext.Consumer>
    )
}

export default Services;