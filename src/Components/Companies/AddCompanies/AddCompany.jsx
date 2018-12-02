import React from 'react';

class AddCompany extends React.Component {
    state = {
        companyName : "",
        description: "",
        logo : ""
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { companyName, description,logo } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <span>Company name</span>
                    <div>
                    <label>
                        <input type="text" name="companyName" value={companyName} placeholder="Company Name" onChange={this.onChange}/>
                    </label>
                    </div>
                    <span>Description</span>
                    <div>
                    <label>
                        <textarea name="description" value={description} placeholder="Describe your company" onChange={this.onChange} />
                    </label>
                    </div>
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