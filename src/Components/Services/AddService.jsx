import React from 'react';
import Modal from 'react-modal';
import { db } from '../../firebase/firebase';
import './styles.css';

class AddService extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            serviceName:"",
            serviceDescription:"",
            availability:"",
            spaces:"",
            duration:"",
            price:""
        }
       
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const serviceRef = db.ref(`/services`)
        const companyId = this.props.selectedCompany
        const service = {
            serviceName: this.state.serviceName,
            serviceDescription: this.state.serviceDescription,
            availability:this.state.availability,
            spaces:this.state.spaces,
            duration:this.state.duration,
            price:this.state.price,
            companyId:companyId
        }
        serviceRef.push(service);
        this.setState({
            serviceName:"",
            serviceDescription:"",
            availability:"",
            duration:"",
            price:"",
            spaces:""
        })
        this.setState({
            companyId:undefined
        })
    }
    
    render() {
        const { serviceName,serviceDescription,availability,spaces,duration,price } = this.state;
        const isInvalid = ( serviceName === '' ||
            serviceDescription === '' || 
            duration === '' ||
            price === '' ||
            spaces === '' || availability === ''
            );
    return (
        <Modal
        isOpen={!!this.props.selectedCompany}
        onRequestClose={this.props.goBack}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        >   
            <form onSubmit={this.onSubmit} >
            <h1 className="center">Add your service</h1>
            
            <div className="service-name">
                <b>Service name</b>
                    <div>
                        <label>
                        <input type="text" name="serviceName" value={serviceName} placeholder="Name" onChange={this.onChange} className="i-input-service"/>
                        </label>
                    </div>
            </div>

            <div className="service-description">
                <b >Service description</b>
                <div>
                    <label>
                    <input type="textarea" name="serviceDescription" value={serviceDescription} placeholder="Description" onChange={this.onChange} className="i-textarea-service" />
                    </label>
                </div>
            </div>

            <div className="service-duration">
                <b>Duration</b>
                <div>
                    <label>
                    <input type="number" name="duration" value={duration} placeholder="Duration" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>
            </div>

            <div className="service-spaces">
                <b>Spaces</b>
                <div>
                    <label>
                    <input type="number" name="spaces" value={spaces} placeholder="Spaces" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>
            </div>

            <div className="service-price">
                <b>Price</b>
                <div>
                    <label>
                    <input type="number" name="price" value={price} placeholder="price" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>
            </div>

            <div className="service-availability">
                <b>Availability</b>
                <div>
                    <label>
                    <input type="number" name="availability" value={availability} placeholder="Availability" onChange={this.onChange} className="i-input-service"/>
                    </label>
                </div>
            </div>
            <button className="button-submit" type="submit" disabled={isInvalid}>Okay</button>
            </form>
            <button onClick={this.props.goBack} className="button-submit-back" >Back</button>
        </Modal>
    )
}
}
// class AddService extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             serviceName:"",
//             serviceDescription:"",
//             availability:"",
//             spaces:"",
//             duration:"",
//             price:""
//         }
       
//     }

//     onChange = (e) => {
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         const serviceRef = db.ref(`/services`)
//         const companyId = this.props.selectedCompany
//         const service = {
//             serviceName: this.state.serviceName,
//             serviceDescription: this.state.serviceDescription,
//             availability:this.state.availability,
//             spaces:this.state.spaces,
//             duration:this.state.duration,
//             price:this.state.price,
//             companyId:companyId
//         }
//         serviceRef.push(service);
//         this.setState({
//             serviceName:"",
//             serviceDescription:"",
//             availability:"",
//             duration:"",
//             price:""
//         })
//         this.setState({
//             companyId:undefined
//         })
//     }
    
//     render() {
//         const { serviceName,serviceDescription,availability,spaces,duration,price } = this.state;
//     return (
//         <Modal
//         isOpen={!!this.props.selectedCompany}
//         onRequestClose={this.props.goBack}
//         contentLabel="Selected Option"
//         closeTimeoutMS={200}
//         className="modal"
//         >   
//             <form onSubmit={this.onSubmit} className="modal__body">
//             <p>{this.props.selectedCompany}</p>
            
//             <div className="service-name">
//                 <b>Service name</b>
//                     <div>
//                         <label>
//                         <input type="text" name="serviceName" value={serviceName} placeholder="Name" onChange={this.onChange} className="i-input-service"/>
//                         </label>
//                     </div>
//             </div>

//             <div className="service-name">
//                 <b>Service description</b>
//                 <div>
//                     <label>
//                     <input type="textarea" name="serviceDescription" value={serviceDescription} placeholder="Description" onChange={this.onChange} className="i-textarea-service" />
//                     </label>
//                 </div>
//             </div>

//                 <b>Duration</b>
//                 <div>
//                     <label>
//                     <input type="number" name="duration" value={duration} placeholder="Duration" onChange={this.onChange} className="i-input-service"/>
//                     </label>
//                 </div>

//                 <b>Spaces</b>
//                 <div>
//                     <label>
//                     <input type="number" name="spaces" value={spaces} placeholder="Spaces" onChange={this.onChange} className="i-input-service"/>
//                     </label>
//                 </div>

//                 <b>Price</b>
//                 <div>
//                     <label>
//                     <input type="number" name="price" value={price} placeholder="price" onChange={this.onChange} className="i-input-service"/>
//                     </label>
//                 </div>

//                 <b>Availability</b>
//                 <div>
//                     <label>
//                     <input type="number" name="availability" value={availability} placeholder="Availability" onChange={this.onChange} className="i-input-service"/>
//                     </label>
//                 </div>
//             <button  type="submit" >Okay</button>
//             </form>
//             <button onClick={this.props.goBack}>Back</button>
//         </Modal>
//     )
// }
// }
export default AddService;