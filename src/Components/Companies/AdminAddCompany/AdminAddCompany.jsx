import React from 'react';
import './AdminAddCompany.css';

class AdminAddCompany extends React.Component {

    saveCompany = (event) => {
        event.preventDefault();
        console.log('Admin Add Company');
    }
    render() {
        return (
            <form className="c-addcompany-form">
                <h1>Admin Add Company</h1>
                <div>
                    <label>Upload logo</label>
                    <input type="file" accept="image/*"/>
                    
                </div>

                <div>
                    <label>Company name</label>
                    <input type="text"/>
                </div>

                <div>
                    <label>Description</label>
                    <input type="text"/>
                </div>
                <button onClick={this.saveCompany}>Save</button>
            </form>
        );
    }
}

export default AdminAddCompany;