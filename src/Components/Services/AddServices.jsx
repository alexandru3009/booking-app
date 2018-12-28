import React from 'react';
import './Services.css';
import {db} from '../../firebase/index';

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
        const {serviceName,serviceDescription,availability,spaces,duration,price} = this.state;
        
        db.createService(serviceName,serviceDescription,availability,spaces,duration,price)
        console.log("Admin Add Service");
        console.log(this.state);
        this.props.history.push("/home");
    }
    render() {
        const  { serviceDescription,serviceName,duration,spaces,availability,price } = this.state;
        const isInvalid = (serviceDescription==="" || serviceName==="" || duration==="" || spaces==="" || price==="" || availability==="")
        return (
            <form className="c-services-form" onSubmit={this.onSubmit}>
                <h1>Add a new service</h1>

                <b>Service name</b>
                <div>
                    <label>
                    <input type="text" name="serviceName" value={serviceName} placeholder="Name" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>

                <b>Service description</b>
                <div>
                    <label>
                    <input type="textarea" name="serviceDescription" value={serviceDescription} placeholder="Description" onChange={this.onChange} className="i-textarea-service" />
                    </label>
                </div>

                <b>Duration</b>
                <div>
                    <label>
                    <input type="number" name="duration" value={duration} placeholder="Duration" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>

                <b>Spaces</b>
                <div>
                    <label>
                    <input type="number" name="spaces" value={spaces} placeholder="Spaces" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>

                <b>Price</b>
                <div>
                    <label>
                    <input type="number" name="price" value={price} placeholder="price" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>

                <b>Availability</b>
                <div>
                    <label>
                    <input type="number" name="availability" value={availability} placeholder="Availability" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>

                <button type="submit" disabled={isInvalid} className="button-service">Add Service</button>
            </form>
        )
    }
}

export default AddServices;