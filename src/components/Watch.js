import React, { Component } from 'react'

class Watch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }
    render() {
        return (
            <div style={{ fontSize: '80px' }}>
                <h1>{this.state.time}</h1>
                <h2>{this.state.date}</h2>
            </div>
        )
    }
}
export default Watch
