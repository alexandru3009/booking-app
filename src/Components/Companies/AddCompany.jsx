import React from 'react';
import './Companies.css';
import { db } from '../../firebase/firebase';


class AddCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName:"",
            companyDescription:"",
            companyLogo:""
        }
    }
    
    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const companiesRef = db.ref('companies');
        const company = {
          companyDescription: this.state.companyDescription,
          companyName:this.state.companyName,
          userId: this.props.authUser.uid
        }
        companiesRef.push(company);
        this.setState({
          companyDescription: '',
          companyName:''
        });
        this.props.history.push("/home");
      }

    render() {
        
        const { companyName, companyDescription,companyLogo } = this.state;
        const isInvalid = (companyName==="" || companyDescription==="")
        return (
            <div>
                <form onSubmit={this.onSubmit} className="c-companies-form">
                    <h1>Add a new company</h1>
                    <b>Company name</b>
                    <div>
                        <label>
                        <input type="text" name="companyName" value={companyName} placeholder="Company name" onChange={this.onChange} className="i-input-company"/>
                        </label>
                            
                    </div>
                    <b>Description</b>
                    <div>
                        <label>
                        <input type="textarea" name="companyDescription" value={companyDescription} placeholder="Describe your company" onChange={this.onChange} className="i-textarea-company" />
                        </label>
                    </div>
                    <b>Add your company logo</b>
                    <div>
                        <input type="file" accept ="/image" name="companyLogo" value={companyLogo} placeholder="Add your company logo" onChange={this.onChange} />
                    </div>
                        <button type="submit" className="button-company" disabled={isInvalid} >Add company</button>
                </form>
            </div>
        );
    }
}

export default AddCompany;