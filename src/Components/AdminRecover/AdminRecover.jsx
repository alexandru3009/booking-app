import React from 'react';
import './AdminRecoverPassword.css';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';


const AdminRecoverPassword = () => (
    <div>
        
        <RecoverPassword />
    </div>
)


class RecoverPassword extends React.Component {
    state = {
        email:"",
        error:null,
        errorEmail:""
    }
    
    onSubmit = (e) => {
        const alert="Please check your email !";
        e.preventDefault();
        auth.doPasswordReset(this.state.email).then(() => {
            
            this.setState({ ...this.state,alert })
        }).catch(error => {
            let errorEmail="";

            if(error.code ==='auth/user-not-found') {
                errorEmail = "There is no such user in our database ! Please enter a valid email or register !";
            }
            if(errorEmail) {
                this.setState({errorEmail});
            }
        })
    
    }

    onChange = (e) => {
        this.setState( { [e.target.name] : e.target.value });
    }
    
    render() {
        const { email, errorEmail } = this.state;
        const isInvalid = (email === "")
        return (
            <div className="c-recover-form">
            <h1>Recover your password</h1>
            
            <form onSubmit={this.onSubmit} >  
                {errorEmail && <p>{errorEmail}</p>}
                {alert && <p>{this.state.alert}</p>}  
                <span>Email</span>
                <div>
                    <input type="email" name="email" value={email} placeholder="email" onChange={this.onChange}/>   
                </div>
                <button type="submit" disabled={isInvalid}>Recover</button>
            </form>
            </div>
        );
    }
}

const AdminPasswordForget = () => (
    <div>
        <Link to="/recover">Forgot Password ?</Link>
    </div>
)

export default AdminRecoverPassword;

export { RecoverPassword, AdminPasswordForget };

