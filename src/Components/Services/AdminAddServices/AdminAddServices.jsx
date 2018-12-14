import React from 'react';
import './AdminAddServices.css';
import {db} from '../../../firebase/index';

class AddServices extends React.Component {
    state = {
        serviceName:"",
        serviceDescription:"",
        availability:"",
        spaces:"",
        duration:"",
        price:""
    }
    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log("Admin Add Service");
        const  { serviceDescription,serviceName,availability,spaces,duration,price } = this.state;
        db.doCreateService(serviceDescription,serviceName,spaces,duration,price,availability)
        this.setState({ ...this.state });
    }
    render() {
        const  { serviceDescription,serviceName,serviceDuration,spaces,duration,price } = this.state;
        return (
            <form className="c-addservices-form" onSubmit={this.onSubmit}>
                <h1>Admin Add services</h1>
                <div>
                    <label>Service name</label>
                    <input type="text" name="serviceName" value={serviceName} placeholder="Name" onChange={this.onChange}/>
                </div>

                <div>
                    <label>Service description</label>
                    <input type="textarea" name="serviceDescription" value={serviceDescription} placeholder="Description" onChange={this.onChange} />
                </div>

                <div>
                    <label>Duration</label>
                    <input type="number" name="duration" value={duration} placeholder="Duration" onChange={this.onChange}/>
                </div>

                <div>
                    <label>Spaces</label>
                    <input type="number" name="spaces" value={spaces} placeholder="Spaces" onChange={this.onChange}/>
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" name="price" value={price} placeholder="price" onChange={this.onChange} />
                </div>

                <button>Add Service</button>
            </form>
        )
    }
}

export default AddServices;