import React, { Component } from 'react'
import { UserProvider } from './UserContext'
import ComponentB from './ComponentB'


class ComponentA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    Count = () =>{
        this.setState(prevState=>{
            return {count : prevState.count +1}
        })
    }

    render() {
        const obj={
            count:this.state.count,
            Count:this.Count
        }
        return (
            <UserProvider value={obj}>
                 <ComponentB />               
            </UserProvider>
        )
    }
}
export default ComponentA