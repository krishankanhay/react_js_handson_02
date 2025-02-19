import React, { Component } from "react";
import './Style.css'
class FormCompo extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            department: '',
            rating: '',
            error: {},
            StuData: []
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validate = () => {
        if (!this.state.name) {
            this.state.error.name = 'Please Fill Your Name'
        }

        if (!this.state.department) {
            this.state.error.department = 'Please Fill department'
        }

        if(!this.state.rating || this.state.rating < 1 || this.state.rating > 5 ){
            this.state.error.rating = 'Rating should between 1 to 5'
        }
        // this.setState({
        //     ...this.state,
        //     ...error
        // });
    }

    handleSubmit = () => {
        this.validate();

        const tempObj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }

        this.state.StuData.push(tempObj)
        this.setState(
            { StuData: this.state.StuData, name: '', department: '', rating: '' }
        )

        console.log(this.state.error.name);
        console.log(this.state.error.department);
        console.log(this.state.error.rating);
        console.log(this.state.error);
    }

    render() {
        return (
            <>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <h3>Name : </h3>
                <input type="text" name='name' value={this.state.name} placeholder="Enter Your Name" onChange={this.handleChange} />
                <div className="dError">
                    {this.state.error.name &&
                        <span>Error: Please Fill The Field</span>
                    }
                </div>
                <h3>Department : </h3>
                <input type="email" name='department' value={this.state.department} placeholder="Enter Your Department" onChange={this.handleChange} />
                <div className="dError">
                    {this.state.error.department &&
                        <span>Error: Please Fill The department Field</span>
                    }
                </div>
                <h3>Rating : </h3>
                <input type="email" name='rating' value={this.state.rating} placeholder="Enter Your Rating" onChange={this.handleChange} />
                <div className="dError">
                    {this.state.error.rating &&
                        <span>Error: Rating between 1 to 5</span>
                    }
                </div>
                <button onClick={this.handleSubmit}>Submit</button>

                <div>
                    {this.state.StuData.map((item, index) => {
                        console.log(item);
                        return (
                            <div key={index}>
                                <h1>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</h1>
                            </div>
                        )
                    })}
                </div >
            </>
        )
    }
}
export default FormCompo;










