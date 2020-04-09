import React, { Component } from 'react'
class Exercise2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            id: '',
            singleData: '',
            FirstName: '',
            LastName: '',
            isDisplayUpdateBtn: 'none',
            isDisplayAddBtn: 'initial'

        }
    }

    changeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    clickHandlerAdd(e) {
        e.preventDefault()
        if (this.state.data.length === 0) {
            this.setState({
                id: 0
            })
        } else {
            this.setState({
                id: this.state.data[this.state.data.length - 1].id + 1
            })
        }
        this.state.data.push({
            id: this.state.id,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName
        })
        this.setState({
            FirstName: '',
            LastName: ''
        })
    }
    clickHandlerEdit(e, id) {
        e.preventDefault()
        this.setState({
            singleData: this.state.data.find(element => element.id === id)
        })
        this.setState({
            isDisplayUpdateBtn: 'initial',
            isDisplayAddBtn: 'none',
            id: id,
            FirstName: this.state.singleData.FirstName,
            LastName: this.state.singleData.LastName
        })
    }
    clickHandlerDelete(e, id) {
        e.preventDefault()
        this.state.data.splice(this.state.data.findIndex(d => d.id === id), 1)
        this.setState({})
    }
    clickHandlerUpdate(e) {
        e.preventDefault()
        this.setState({
            singleData: this.state.data.find(item => item.id === this.state.id),
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
        })
        this.setState({
            FirstName: '',
            LastName: '',
            isDisplayAddBtn: 'initial',
            isDisplayUpdateBtn: 'none'
        })
    }
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-center align-items-center bg-dark p-2 mt-5 mb-2 " style={{ color: 'white' }}>
                    <input className=" bg-transparent text-white form-control mr-2" id="FirstName" onChange={e => this.changeHandler(e)} type="text" value={this.state.FirstName} placeholder="First Name" />
                    <input className=" bg-transparent text-white form-control mr-2" id="LastName" onChange={e => this.changeHandler(e)} type="text" value={this.state.LastName} placeholder="Last Name" />
                    <button className="btn btn-warning" id="addbtn" style={{ display: this.state.isDisplayAddBtn }} onClick={e => this.clickHandlerAdd(e)}>ADD</button>
                    <button className="btn btn-warning" id="updatebtn" style={{ display: this.state.isDisplayUpdateBtn }} onClick={e => this.clickHandlerUpdate(e)}>UPDATE</button>
                </div>
                <div className="container d-flex justify-content-center align-items-center text-white  p-2">
                    <table className="table table-bordered table-striped table-dark table-hover">
                        <thead className="text-warning">
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th><i className="fas fa-edit text-warning"></i></th>
                                <th><i className="fas fa-trash text-danger"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.FirstName}</td>
                                        <td>{item.LastName}</td>
                                        <td><i onClick={e => this.clickHandlerEdit(e, item.id)} className="fas fa-edit text-warning"></i></td>
                                        <td><i onClick={e => this.clickHandlerDelete(e, item.id)} className="fas fa-trash text-danger"></i></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default Exercise2
