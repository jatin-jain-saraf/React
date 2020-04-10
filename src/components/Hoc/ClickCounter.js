import React, { Component } from 'react'
import withCounter from './WithCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    render() {
        const { count, incrementCount } = this.props

        return (

            <button onClick={incrementCount}>
                {this.props.name} Clicked {count} ti mes</button>

        )
    }
}

export default withCounter(ClickCounter,5)
