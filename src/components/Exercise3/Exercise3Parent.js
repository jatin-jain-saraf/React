import React, { Component } from 'react'
import Exercise3Child from './Exercise3Child'

class Exercise3Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: ''
        }
        this.parentRef = React.createRef()
    }

    cliclHandler = () => {
        this.parentRef.current.increment()
        // this.state.count = this.parentRef.current.focus.coun

    }
    callback = (child)=>{
        console.log(child);
        
    }
    render() {
        return (
            <div>
                <Exercise3Child ref={this.parentRef} callback={this.callback} />
                <button onClick={this.cliclHandler}>Increment</button>
            </div>
        )
    }
}

export default Exercise3Parent
