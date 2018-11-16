import React from 'react';
import './AdminChangePassword.css';
import { auth } from '../../firebase/index';


const AdminChangePassword = ({ history }) => (
    <div>
        <ChangePassword history={history}/>
    </div>
)

const byPropKey = (propertyName,value) =>({ [propertyName] : value });

class ChangePassword extends React.Component {
    state = {
        passwordOne:'',
        passwordTwo:'',
        error:null
    }

    onChange = (e) => {
        this.setState( { [e.target.name] : e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        auth.doPasswordUpdate(this.state.passwordOne).then(() => {
            this.setState( { ...this.state });
            this.props.history.push("/login");
            auth.doSignOut();
        }).catch(error => {
            this.setState(byPropKey('error' , error));
        });
    }

    render() {
        const {passwordOne,passwordTwo,error} =this.state;
        const isInvalid = ( passwordOne !== passwordTwo || passwordOne==='' || passwordTwo==='')
        return (
            <div>
                <form className="c-change-form" onSubmit={this.onSubmit}>
                    {error && <p>{error.message}</p>}
                    <div>
                        <label>
                            <span>New password</span>
                            <input type="password" name="passwordOne" value={passwordOne} placeholder="password" onChange={this.onChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Confirm password</span>
                            <input type="password" name="passwordTwo" value={passwordTwo} placeholder="Confirm password" onChange={this.onChange} />
                        </label>
                    </div>
                    <button type="submit" disabled={isInvalid}>Change password</button>
                </form>
            </div>
        )
    }
}

export default AdminChangePassword;