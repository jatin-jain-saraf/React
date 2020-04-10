import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    render() {
        return (
            <div>
                <label>Username</label>
                <input
                    onChange={this.handleUserNameChange}
                    type="text"
                    value={this.state.username}
                />
            </div >
        )
    }
}

export default Form
