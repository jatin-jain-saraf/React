import React, { Component } from 'react'
class RefDemo extends Component {

    constructor(props) {
        super(props)

        // this.inputRef = React.createRef()
        // or
        this.cbRef = null
        this.setcbRef = (element) => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
        // or
        if (this.cbRef) {
            this.cbRef.focus()
        }

    }
    clickHandler = () => {
        // alert(this.inputRef.current.value)
        // or
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                {/* or */}
                <input type="text" ref={this.setcbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
