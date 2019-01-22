import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import AddServices from './AddServices';

const Services = ({history}) => {
    return (
        <AuthUserContext.Consumer>
            {context => 
                <AddServices selectedCompany={context.selectedCompany} history={history}  />
            }
        </AuthUserContext.Consumer>
    )
}

export default Services;