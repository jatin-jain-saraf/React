import React, { Component } from 'react'

class Exercise3Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

    }
    increment = () => {
        this.state.count = this.state.count + 1
        console.log(this.state.count);
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Exercise3Child
