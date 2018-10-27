import React from 'react';
import './AdminAddServices.css';

class AdminAddServices extends React.Component {

    AddService = (event) => {
        event.preventDefault();
        console.log("Admin Add Service")
    }
    render() {
        return (
            <form className="c-addservices-form">
                <h1>Admin Add services</h1>
                <div>
                    <label>Service name</label>
                    <input type="text"/>
                </div>

                <div>
                    <label>Service description</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Duration</label>
                    <input type="number"/>
                </div>

                <div>
                    <label>Spaces</label>
                    <input type="text"/>
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" />
                </div>

                <button onClick={this.AddService}>Add Service</button>
            </form>
        )
    }
}

export default AdminAddServices;