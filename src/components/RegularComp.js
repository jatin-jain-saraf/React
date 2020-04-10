import React, { Component } from 'react'
class RegularComp extends Component {
    render() {
        console.log("regular");
        
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
