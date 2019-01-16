import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import './AddServices';

const Services = () => {
    return (
        <AuthUserContext.Consumer>
            {context => 
                <AddServices selectedCompany={context.selectedCompany} />
            }
        </AuthUserContext.Consumer>
    )
}