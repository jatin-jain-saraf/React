
import React, { Component } from 'react'

class Pagination extends Component {
    render() {
        const { onPageSizeChanged, onButtonClick } = this.props
        return (
            <div>
                <div className="test-header text-dark">
                    Rows per page:
                <select onChange={() => onPageSizeChanged()} id="page-size">
                        <option value="2">2 </option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10" defaultValue="">10</option>
                        <option value="20">20</option>

                    </select>
                </div>
                <button className=" btn btn-primary p-2 m-2 " onClick={onButtonClick}>Get selected rows</button>
            </div>
        )
    }
}

export default Pagination
