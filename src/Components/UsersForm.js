import React, { Component } from 'react';

export default class UserForm
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: "",
                    email: "",
                    gen: ""
                },
            ]
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.newUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: "",
        });
        console.log(this.state.persons);
    };
    render() {
        return (
            <div 
            className='signupForm'>
                <h1>Register</h1>
                <form
                    onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Gen: </label>
                        <input
                            type="text"
                            name="gen"
                            value={this.state.gen}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='button' >Submit</button>
                </form>
                {this.state.persons.map((item, index) => {
                    return (
                        <div 
                        key={index}>
                            {/* <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Gen: {item.gen}</p> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}


