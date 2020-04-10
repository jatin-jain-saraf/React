import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentD extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    ({ count, Count }) => {
                        return <React.Fragment>
                            <h1>{count}</h1>
                            <button onClick={Count}>Click</button>
                        </React.Fragment>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentD
