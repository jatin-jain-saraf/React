import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("pure");
        
        return (
            <div>
                Pure omponent {this.props.name}
            </div>
        )
    }
}

export default PureComp
