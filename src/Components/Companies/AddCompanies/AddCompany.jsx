import React from 'react';
import { db } from '../../../firebase/index';



class AddCompany extends React.Component {
    state = {
        companyName:"",
        companyDescription:"",
        errorName:null,
        errorDescription:null
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {companyName,companyDescription,logo} = this.state;
        if(companyName==="")
        {
            this.setState({errorName:"Please add a company name"});
        }
        else if(companyDescription==="")
        {
            this.setState({errorDescription:"Please add a company description"});
        }
        else

        {
        db.doCreateCompany(companyName,companyDescription,logo)
        this.setState({ ...this.state });
        }
    }
    

    render() {
        const { companyName, companyDescription,logo,errorName,errorDescription } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <span>Company name</span>
                    <div>
                    <label>
                        <input type="text" name="companyName" value={companyName} placeholder="Company Name" onChange={this.onChange}/>
                    </label>
                    
                    </div>
                    {errorName ? <p>{errorName}</p> : null}
                    <span>Description</span>
                    <div>
                    <label>
                        <textarea name="companyDescription" value={companyDescription} placeholder="Describe your company" onChange={this.onChange} />
                    </label>
                    </div>
                    {errorDescription ? <p>{errorDescription}</p>:null}
                    <span>Your company logo</span>
                    <div>
                        <input type="file" accept ="/image" name="logo" value={logo} placeholder="Add your company logo" onChange={this.onChange} />
                    </div>
                    <button type="submit">Add company</button>
                </form>
            </div>
        )
    }
}

export default AddCompany;