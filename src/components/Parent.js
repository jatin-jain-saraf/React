import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoCompo from './MemoCompo'

class Parentcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Jatin'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Jatin'
            })
        }, 2000)
    }
    render() {
        console.log("parrent");

        return (
            <div>
                Parrent Component
                <MemoCompo name={this.state.name} />
                {/* <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default Parentcomponent
