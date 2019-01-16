import React from 'react';
import { firebase } from '../../firebase/index';
import AuthUserContext from './AuthUserContext';

//Higher Order Component
const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser:null,
                selectedCompany:undefined,
                details:[
                    {
                        info:"About",
                        author:"Alex"
                    },
                    {
                        info:"despre detalii",
                        author:"Cristy"
                    }
                ]
            };
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser ? this.setState({ authUser }) : this.setState({ authUser:null })
            });
        }

        render() {
            const { authUser,selectedCompany } = this.state;
            return (
                <div>
                    <AuthUserContext.Provider value = {{authUser:authUser,
                        selectedCompany:selectedCompany,
                        details:this.state.details
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