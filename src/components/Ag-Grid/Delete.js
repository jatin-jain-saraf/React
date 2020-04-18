import React, { Component } from 'react'
import { EuiIcon } from '@elastic/eui';

class Delete extends Component {
    
    render() {
        return (
            <>
                <EuiIcon className="bg-danger" icon="m" type="trash" onClick={this.props.delete} />

            </>
        )
    }
}

export default Delete
