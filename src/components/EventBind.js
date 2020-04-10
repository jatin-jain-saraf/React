import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
        // this.clickHandeler = this.clickHandeler.bind(this)
    }
    // clickHandeler() {
    //     this.setState({
    //         message: 'GoodBye'

    //     })
    // }
    clickHandler = () => {
        this.setState({
            message: 'GoodBye'
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                {/* //typeone Binding in render method this will generate handler for every update render
                <button onClick={this.clickHandeler.bind(this)}>click</button>
             */}

                {/* Second type arrow function approch call handler in body of arrow function
                <button onClick={() => this.clickHandeler()}>click</button> 
                */}
                {/* type three bind the handler in constructor only one time happned 
                <button onClick={this.clickHandeler}>click</button>
                 */}
                {/* fourth type to use arrow function as class property */}
                <button onClick={this.clickHandler}>click</button> 
               

            </div>
        )
    }
}

export default EventBind
