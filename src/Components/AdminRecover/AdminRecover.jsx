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
            this.setState({error});
        })
    }

    onChange = (e) => {
        this.setState( { [e.target.name] : e.target.value });
    }
    
    render() {
        const { email, error } = this.state;
        const isInvalid = (email === "")
        return (
            <div>
            <form onSubmit={this.onSubmit} className="c-recover-form">  
                {error && <p>{error.message}</p>}  
                <div>
                    <input type="email" name="email" value={email} placeholder="email adress" onChange={this.onChange}/>   
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

