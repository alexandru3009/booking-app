import React from 'react';
import { auth } from '../../firebase/index';


const SignOutButton = () => (
    <div>
        
        <button onClick={auth.doSignOut} className="button-logout">
        Sign Out
        </button>
    </div>
);

export default SignOutButton;