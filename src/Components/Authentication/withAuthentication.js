import React from 'react';
import { firebase } from '../../firebase/index';
import AuthUserContext from './AuthUserContext';
import { db } from '../../firebase/firebase';

//Higher Order Component
const withAuthentication = (Component)  => { 
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser:null,
                users:[],
                companies:[],
                selectedCompany:undefined
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
        }

        removeCompany = (companyId) => {
            const companyRef = db.ref(`/companies/${companyId}`);
            companyRef.remove();
        }
        
        addService = (companyId) => {
            const option = companyId
            this.setState({
                selectedCompany:option
            })
            
            console.log(this.state.selectedCompany)
            //this.state.history.push("/addservice");
        }

        

        

        render() {
            const { authUser,selectedCompany,users,companies } = this.state;
            return (
                <div>
                    <AuthUserContext.Provider value = {{authUser:authUser,
                        users:users,
                        companies:companies,
                        selectedCompany:selectedCompany,
                        removeCompany:this.removeCompany,
                        addService:this.addService,
                        changeSelectCompany:this.changeSelectCompany
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