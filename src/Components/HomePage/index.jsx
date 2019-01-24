import React from 'react';
import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';
import HomeComponent from './HomeComponent';

const HomePage = ({history}) => (
        <AuthUserContext.Consumer>
            {context => 
                <React.Fragment>  
                    <HomeComponent 
                        onChange={context.onChange}
                        history={history}
                        removeCompany={context.removeCompany} 
                        companies={context.companies} 
                        authUserId={context.authUser.uid}
                        services={context.services}
                    />
                </React.Fragment>
            }
        </AuthUserContext.Consumer>
    )

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(HomePage);


