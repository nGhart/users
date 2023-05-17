import React, { Component } from 'react'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            id: props.userInfo.id
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    handleEdit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state);
        this.setState({
            name: "",
            email: "",
            gen: ""
        });
        this.props.closeModal()
    }
    render() {
        return (
            <div
                className='editForm '>
                <form onSubmit={this.handleEdit}>
                    <div>
                        <label>Name: </label><br />
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Email: </label><br />
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Gen: </label><br />
                        <input
                            type="text"
                            name="gen"
                            value={this.state.gen}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='button' >Save changes</button>
                </form>

            </div>
        )
    }
}

export default Edit