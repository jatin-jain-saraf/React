import React, { Component } from 'react'
import Exercise3Child from './Exercise3Child'

class Exercise3Parent extends Component {
    constructor(props) {
        super(props)

        this.parentRef = React.createRef()
    }
    cliclHandler = () => {
        this.parentRef.current.increment()
    }
    render() {
        return (
            <div>
                <Exercise3Child ref={this.parentRef} />
                <button onClick={this.cliclHandler}>Increment</button>
            </div>
        )
    }
}

export default Exercise3Parent
