import React, { Component } from 'react'
class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    // approch 1 if else
    // render() {
    //     if (this.state.isLoggedIn){
    //         return <div>Welcome Jatin</div>
    //     } else {
    //         return <div>Welcome Guest</div>
    //     }


    // }


    // // approch 2 element variable
    // render() {
    //     let message
    //     if (this.state.isLoggedIn) {
    //         message = <div>Welcome Jatin</div>
    //     } else {
    //         message = <div>Welcome Guest</div>
    //     }
    //     return (
    //         <div>{message}</div>
    //     )
    // }

    // // approch 3 tererary operator
    // render() {
    //     return (
    //         this.state.isLoggedIn ?
    //             (<div> Welcome Jatin</div>) :
    //             (<div>Welcome Guest</div>)
    //     )
    // }

    // approch 4 Short circit approch
    render() {
        return this.state.isLoggedIn && <div>Welcome Jatin</div>

    }
}

export default UserGreeting
