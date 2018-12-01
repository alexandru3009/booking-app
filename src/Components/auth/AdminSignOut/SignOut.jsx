import React from 'react';
import { auth } from '../../../firebase/index';


const SignOutButton = () => (
    <div>
        
        <button onClick={auth.doSignOut}>Sign Out</button>
    </div>
);

export default SignOutButton;