import React, { Component } from 'react'

class FilterBox extends Component {
    render() {
        const { searchData } = this.props

        return (
            <div>
                <input className="p-2 m-2 " type="text" onInput={searchData} placeholder="Search" />

            </div>
        )
    }
}

export default FilterBox
