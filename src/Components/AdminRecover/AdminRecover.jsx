import React,{ Component } from 'react';
import './AdminRecover.css';

class AdminRecover extends Component {
    sendPassword = (event) => {
        event.preventDefault();
        console.log('Admin Recover-send password');
    }
    render() {
        return (
            <form className="c-recover-form">
                <h1>Admin Recover Password</h1>
                <div>
                    <label>
                        <span>Email</span>
                        <input type="email"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password</span>
                        <input type="password"/>
                    </label>
                </div>
                <button onClick={this.sendPassword}>Send Password</button>
            </form>
        );
    }
}

export default AdminRecover;