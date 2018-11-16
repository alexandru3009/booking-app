import React from 'react';
import './AdminRecoverPassword.css';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';


const AdminRecoverPassword = () => (
    <div>
        <h1>Recover your password</h1>
        <RecoverPassword />
    </div>
)

const byPropKey = (propertyName,value) => ({
    [propertyName] : value
});

class RecoverPassword extends React.Component {
    state = {
        email:"",
        error:null
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        auth.doPasswordReset(this.state.email).then(() => {
            this.setState({ ...this.state })
        }).catch(error => {
            this.setState(byPropKey('error',error));
        })
    }

    onChange = (e) => {
        this.setState( { [e.target.name] : e.target.value });
    }
    
    render() {
        const isInvalid = (this.state.email === "")
        return (
            <div>
            <form onSubmit={this.onSubmit} className="c-recover-form">  
                {this.state.error && <p>{this.state.error.message}</p>}  
                <div>
                    <input type="email" name="email" value={this.state.email} placeholder="email adress" onChange={this.onChange}/>   
                </div>
                <button type="submit" disabled={isInvalid}>Recover password</button>
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

