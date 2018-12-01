import React from 'react';
import './AdminChangePassword.css';
import { auth } from '../../../firebase/index';


const AdminChangePassword = ({ history }) => (
    <div>
        
        <ChangePassword history={history}/>
    </div>
)


class ChangePassword extends React.Component {
    state = {
        passwordOne:'',
        passwordTwo:'',
        error:null,
        passType:'input'
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
            this.setState({ error });
        });
    }

    showHide = (e) => {
        e.preventDefault();
        this.setState({
          passType:this.state.passType === 'input' ? 'password' : 'input'
        })
      }

    render() {
        const { passwordOne,passwordTwo,error,passType } =this.state;
        const isInvalid = ( passwordOne !== passwordTwo || passwordOne==='' || passwordTwo==='')
        return (
            <div className="c-change-form">
                <h3>Change your password</h3>
                <form  onSubmit={this.onSubmit}>
                    {error && <p>{error.message}</p>}
                    <span>New password</span>
                    <div>
                        <label>
                            <input type={passType} name="passwordOne" value={passwordOne} placeholder="password" onChange={this.onChange}/>
                        </label>
                        <button  onClick={this.showHide}>
                        {passType === 'input' ? 'Hide' : 'Show'}
                        </button>
                    </div>   
                    <span>Confirm password</span>
                    <div>
                        <label>
                            <input type={passType} name="passwordTwo" value={passwordTwo} placeholder="Confirm password" onChange={this.onChange} />
                        </label>
                    </div>
                    <button type="submit" disabled={isInvalid}>Change password</button>
                </form>
            </div>
        )
    }
}

export default AdminChangePassword;