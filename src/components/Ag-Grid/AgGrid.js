import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
export class AgGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filterData: null,
      columnDefs: [{
        headerName: "FirstName", field: "firstName", sortable: true, filter: true, checkboxSelection: true, resizable: true, editable: true
      }, {
        headerName: "LastName", field: "lastName", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "Branch", field: "branch", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "DateOfBirth", field: "dateOfBirth", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "Contact", field: "contact", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "Email", field: "email", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "Action", field: "actions", cellRenderer: function () {
          return (
            ' <button class="action" onClick={this.delete}><i class="medium material-icons" style="color:red">delete</i></button> '
          )
        }
      }],
      rowData: [{
        firstName: "Hardik",
        lastName: "Motwani",
        branch: "IT",
        dateOfBirth: "20-02-1998",
        contact: 8488866756,
        email: "hardik.motwani@rapidops.com"
      },
      {
        firstName: "Meet",
        lastName: "Shah",
        branch: "CS",
        dateOfBirth: "15-05-1999",
        contact: 7982124770,
        email: "meet.shah@rapidops.com"
      },
      {
        firstName: "Darshan",
        lastName: "Raval",
        branch: "IT",
        dateOfBirth: "12-11-1997",
        contact: 9870912667,
        email: "darshan.raval@gmail.com"
      },
      {
        firstName: "Dhairya",
        lastName: "Shah",
        branch: "CS",
        dateOfBirth: "10-12-1996",
        contact: 8460556732,
        email: "shahdhairya@gmail.com"
      },
      {
        firstName: "Ravi",
        lastName: "Pathekar",
        branch: "It",
        dateOfBirth: "05-05-1997",
        contact: 8901265437,
        email: "ravi.parhekargmail.com"
      },
      {
        firstName: "Alia",
        lastName: "Bhatt",
        branch: "IT",
        dateOfBirth: "22-06-1998",
        contact: 8460123456,
        email: "alia.bhatt@rapidops.com"
      },
      {
        firstName: "Vaibhav",
        lastName: "Kabira",
        branch: "IT",
        dateOfBirth: "13-05-1999",
        contact: 9876512344,
        email: "kabira.vaibhav@gmail.com"
      },
      {
        firstName: "Ananya",
        lastName: "Pandey",
        branch: "CS",
        dateOfBirth: "29-09-1999",
        contact: 8488898765,
        email: "ananya.pandey@gmail.com"
      },
      {
        firstName: "Joe",
        lastName: "Dawson",
        branch: "CS",
        dateOfBirth: "17-07-1997",
        contact: 9988666756,
        email: "joe.dawson@gmail.com"
      },
      {
        firstName: "Kane",
        lastName: "Williamson",
        branch: "IT",
        dateOfBirth: "30-03-1997",
        contact: 9867542310,
        email: "kanewilliamson@gmail.com"
      },

      ],
    };
    this.searchData = this.searchData.bind(this);
    this.delete = this.delete.bind(this)

  }
  delete() {
    console.log('delete');

  }
  componentWillMount() {
    this.setState({
      filterData: this.state.rowData
    })
  }
  onGridReady = (params) => {
    this.api = params.api;
  }
  onButtonClick = e => {
    const selectedNodes = this.api.getSelectedNodes()
    const selectedData = selectedNodes.map(node => node.data)
    const selectedDataStringPresentation = selectedData.map(a => a.firstName + ' ' + a.lastName + ' From ' + a.branch).join('\n ')

    alert(`Selected nodes: ${'\n'}${selectedDataStringPresentation}`)
  }
  searchData = (e) => {
    let updateList = this.state.rowData;
    updateList = updateList.filter(item => {
      return item.firstName.toLowerCase().search(
        e.target.value.toLowerCase()
      ) !== -1
    })
    this.setState({
      filterData: updateList
    })


  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '55vh',
          width: '100%'
        }}
      >
        <h1 className="bg-secondary text-light" >Ag-Grid</h1>
        <input className="p-2 m-2 " type="text" onChange={this.searchData} placeholder="Search" />
        {/* {filterData.map(item => item.rowData) */}
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.filterData}
          rowDataChangeDetectionStrategy='IdentityCheck'
          onGridReady={this.onGridReady}
          rowSelection="multiple"
          pagination="true"

        // paginationAutoPageSize="true"
        >
        </AgGridReact>
        <button className=" btn btn-primary p-2 m-2 " onClick={this.onButtonClick}>Get selected rows</button>

      </div>
    );
  }
}

export default AgGrid
