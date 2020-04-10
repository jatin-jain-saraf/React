import React, { Component } from 'react'

class Exercise3Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

    }
    increment = () => {
        this.setState({ count: this.state.count + 1 },
            () => {
                this.props.callback(this.state.count)
            })
    }
    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
            </div>
        )
    }
}

export default Exercise3Child
