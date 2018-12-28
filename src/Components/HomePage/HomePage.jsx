import React from 'react';
import withAuthorization from '../Authentication/withAuthorization';

class HomePage extends React.Component {

    addCompany = (e) => {
        e.preventDefault();
        this.props.history.push("/addcompany");
    }

    render() {
        return (
    <div>
        <h1>This is my Home Page !</h1>
        <p>Home page for anyone is signed in!</p>
        <button onClick={this.addCompany}>Add company</button>
    </div>
            );
        }
    }

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(HomePage);