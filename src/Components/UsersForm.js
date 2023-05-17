import React, { Component } from 'react'

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: ""
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: ""
        })
    }
    render() {
        return (
            <div
                className='signupForm'>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
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
                            type="email"
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

            </div>
        )
    }
}

export default UsersForm
