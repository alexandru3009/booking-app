import React from 'react';
import { firebase } from '../../firebase/index';
import { db } from '../../firebase/firebase';
import AuthUserContext from './AuthUserContext';

const withAuthentication = (Component)  => { 
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser:null,
                users:[],
                companies:[],
                services:[]
            };
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser ? this.setState({ authUser }) : this.setState({ authUser:null })
            });

            //USER database
            const usersRef = db.ref('users');
            usersRef.on('value',(snapshot) => {
            let users = snapshot.val();
            let newState = [];
            for(let user in users) {
                newState.push({
                id:user,
                lastName: users[user].lastName,
                firstName:users[user].firstName
                });
            }
            this.setState({
                users:newState
            })
            })

            //Companies
            const companiesRef = db.ref('companies');
            companiesRef.on('value',(snapshot) => {
            let companies = snapshot.val();
            let newState = [];
            for(let company in companies) {
                newState.push({
                companyId:company,
                companyDescription: companies[company].companyDescription,
                companyName:companies[company].companyName,
                userId:companies[company].userId
                });
            }
            this.setState({
                companies:newState
            })
            })

            //Services
            const servicesRef = db.ref('services');
            servicesRef.on('value',(snapshot) => {
                let services = snapshot.val();
                let newState = [];
                for(let service in services) {
                    newState.push({
                        serviceId:service,
                        serviceName: services[service].serviceName,
                        serviceDescription: services[service].serviceDescription,
                        duration:services[service].duration,
                        price:services[service].price,
                        spaces:services[service].spaces,
                        companyId:services[service].companyId
                    })
                }
                this.setState({
                    services:newState
                })
            })
        }

        removeCompany = (companyId) => {
            const companyRef = db.ref(`/companies/${companyId}`);
            companyRef.remove();
        }

        render() {
            const { authUser,users,companies,services } = this.state;
            return (
                <div>
                    <AuthUserContext.Provider value = {{authUser:authUser,
                        users:users,
                        companies:companies,
                        services:services,
                        removeCompany:this.removeCompany
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