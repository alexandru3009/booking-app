import React from 'react'
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase/index';
import AuthUserContext from '../Authentication/AuthUserContext';


const withAuthorization = (authCondition) => (Component) => {
    class withAuthorization extends React.Component {

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if(!authCondition(authUser)) {
                    this.props.history.push("/login");
                }
            });
        }

        render() {
            return (
                <div>
                    <AuthUserContext.Consumer>
                        {authUser => authUser ? <Component {...this.props} /> : null}
                    </AuthUserContext.Consumer>
                </div>
            );
        }
    }  
    return withRouter(withAuthorization); 
}

export default withAuthorization;