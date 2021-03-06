import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';
import AddCompany from './AddCompany';

const Companies = ({history}) => (
    <AuthUserContext.Consumer>
    {context =>
        <AddCompany authUser={context.authUser} history={history}/>
    }
    </AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(Companies);