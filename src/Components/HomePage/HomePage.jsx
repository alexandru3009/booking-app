import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';
import FormComponent from './FormComponent';

const HomePage = ({history}) => (
    <AuthUserContext.Consumer>
        {context =>
            <FormComponent authUser={context.authUser} history={history} 
            selectedCompany={context.selectedCompany} />
        }
    </AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(HomePage);