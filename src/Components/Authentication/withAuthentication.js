import React from 'react';
import { firebase } from '../../firebase/index';
import AuthUserContext from './AuthUserContext';

//Higher Order Component
const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser:null
            };
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser ? this.setState({ authUser }) : this.setState({ authUser:null })
            });
        }

        render() {
            const { authUser } = this.state;
            return (
                <div>
                    <AuthUserContext.Provider value = {{authUser:authUser
                    }}>
                       <div> <Component {...this.props} />
                       </div>
                    </AuthUserContext.Provider>
                </div>
            );
        }
    }
    return WithAuthentication;
}

export default withAuthentication;