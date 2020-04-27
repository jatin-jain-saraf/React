import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import ComboBox from './ComboBox'
import Delete from './Delete'
import FilterBox from './FilterBox';
import Pagination from './StaticPagination';
import DynamicPopover from './DynamicPopover'
import Flyout from './Flyout';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import '@elastic/eui/dist/eui_theme_light.css'
class Aggrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateVisibility: [],
            tagData: new Map(),
            rowIndex: [],
            selectedOptions: [],
            isFlyoutVisible: true,
            isTags: false,
            arr: [],
            rowSelected: false,
            colState: null, paginationPageSize: 5, pageCount: null, IsFirstNameDisplay: true, filterData: null,
            columnDefs: [
                { headerName: "Tags", field: "tags", width: 300, cellRendererFramework: () => <ComboBox selectedOptions={this.state.selectedOptions} updateRowData={this.updateRowData} /> },
                { headerName: "FirstName", field: "firstName", onCellClicked: this.onSelectionChanged },
                { headerName: "LastName", field: "lastName", onCellClicked: this.onSelectionChanged },
                { headerName: "Branch", field: "branch", onCellClicked: this.onSelectionChanged },
                { headerName: "DateOfBirth", field: "dateOfBirth", onCellClicked: this.onSelectionChanged },
                { headerName: "Contact", field: "contact", onCellClicked: this.onSelectionChanged },
                { headerName: "Email", field: "email", onCellClicked: this.onSelectionChanged },
                { headerName: "Actions", field: "action", cellRendererFramework: (params) => <Delete delete={this.deleteRow} /> },],
            defaultColDef: {
                width: 200, editable: true, resizable: true, sortable: true, filter: true, colResizeDefault: 'shift', autoHeight: true, aenablePivot: true
            },
            rowData: [{ firstName: "Hardik", lastName: "Motwani", branch: "IT", dateOfBirth: "20-02-1998", contact: 8488866756, email: "hardik.motwani@rapidops.com", },
            { firstName: "Meet", lastName: "Shah", branch: "CS", dateOfBirth: "15-05-1999", contact: 7982124770, email: "meet.shah@rapidops.com" },
            { firstName: "Darshan", lastName: "Raval", branch: "IT", dateOfBirth: "12-11-1997", contact: 9870912667, email: "darshan.raval@gmail.com" },
            { firstName: "Dhairya", lastName: "Shah", branch: "CS", dateOfBirth: "10-12-1996", contact: 8460556732, email: "shahdhairya@gmail.com" },
            { firstName: "Ravi", lastName: "Pathekar", branch: "It", dateOfBirth: "05-05-1997", contact: 8901265437, email: "ravi.parhekargmail.com" },
            { firstName: "Alia", lastName: "Bhatt", branch: "IT", dateOfBirth: "22-06-1998", contact: 8460123456, email: "alia.bhatt@rapidops.com" },
            { firstName: "Vaibhav", lastName: "Kabira", branch: "IT", dateOfBirth: "13-05-1999", contact: 9876512344, email: "kabira.vaibhav@gmail.com" },
            { firstName: "Ananya", lastName: "Pandey", branch: "CS", dateOfBirth: "29-09-1999", contact: 8488898765, email: "ananya.pandey@gmail.com" },
            { firstName: "Joe", lastName: "Dawson", branch: "CS", dateOfBirth: "17-07-1997", contact: 9988666756, email: "joe.dawson@gmail.com" },
            { firstName: "Kane", lastName: "Williamson", branch: "IT", dateOfBirth: "30-03-1997", contact: 9867542310, email: "kanewilliamson@gmail.com" },
            { firstName: "Alia", lastName: "Bhatt", branch: "IT", dateOfBirth: "22-06-1998", contact: 8460123456, email: "alia.bhatt@rapidops.com" },
            { firstName: "Vaibhav", lastName: "Kabira", branch: "IT", dateOfBirth: "13-05-1999", contact: 9876512344, email: "kabira.vaibhav@gmail.com" },
            { firstName: "Ananya", lastName: "Pandey", branch: "CS", dateOfBirth: "29-09-1999", contact: 8488898765, email: "ananya.pandey@gmail.com" },
            { firstName: "Joe", lastName: "Dawson", branch: "CS", dateOfBirth: "17-07-1997", contact: 9988666756, email: "joe.dawson@gmail.com" },
            { firstName: "Kane", lastName: "Williamson", branch: "IT", dateOfBirth: "30-03-1997", contact: 9867542310, email: "kanewilliamson@gmail.com" }],
        };
        this.searchData = this.searchData.bind(this);
        this.aggridRef = React.createRef()
    }
    componentDidMount() {
        this.setState({
            filterData: this.state.rowData
        })

    }
    deleteRow = () => {
        const selectedData = this.api.getSelectedRows();
        this.api.updateRowData({ remove: selectedData });
    }
    updateData = data => {
        this.setState({ rowData: data })
        this.api.paginationGoToPage(4)
    }
    onGridReady = params => {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit()
        this.setState({
            pageCount: this.api.paginationProxy.totalPages,
            colState: this.columnApi.getColumnState()
        })
    }
    onSelectionChanged = () => {
        this.data = this.api.getSelectedRows()[0]
        this.id = this.api.getSelectedNodes()[0].id
        this.setState({
            rowSelected: true,
            isFlyoutVisible: true,
            isTags: false
        })
        const { tagData } = this.state
        for (let [k, v] of tagData) {
            if (this.id === k) {
                this.setState({
                    arr: v,

                    isTags: true,
                })
            }
        }
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
    updateRowData = (selectedOpton) => {
        const { tagData } = this.state
        this.setState({
            selectedOptions: selectedOpton,
            rowIndex: this.api.getSelectedNodes()[0].id
        }, () => {
            tagData.set(this.state.rowIndex, selectedOpton)
            this.onSelectionChanged()
        })

    }
    updatePopOver = () => {
        const { columnDefs } = this.state
        let b = {}
        columnDefs.map(col => {
            return b[col.field] = this.columnApi.getColumn(col.field).visible
        })
        this.setState({
            updateVisibility: b
        }, () => {
            console.log(this.state.updateVisibility);

        })


    }
    callbackPagination = (pageSize) => {
        this.api.paginationSetPageSize(pageSize)
        this.setState({
            paginationPageSize: pageSize
        })
    }
    closeFlyout = (params, arr) => {
        this.setState({
            arr: arr,
            isFlyoutVisible: params,
        })
    }
    goToPage = (pageNumber) => {
        this.api.paginationGoToPage(pageNumber)
    }
    paginationChanged = () => {
        if (this.api) {
            this.setState({
                pageCount: this.api.paginationProxy.totalPages
            })
        }
    }
    render() {
        const { columnDefs, defaultColDef, filterData } = this.state
        return (
            <div className="ag-theme-balham-dark" style={{ height: '50vh', width: '100%' }}>
                <div style={{ float: 'right' }}>
                    <DynamicPopover columnDefs={columnDefs} updatePopover={this.updatePopOver} updateVisibility={this.state.updateVisibility} columnApi={this.columnApi} />
                </div>
                <FilterBox searchData={this.searchData} />
                <AgGridReact columnDefs={columnDefs} rowData={filterData} defaultColDef={defaultColDef} rowDataChangeDetectionStrategy='IdentityCheck' onGridReady={this.onGridReady}
                    rowSelection="multiple" onDragStarted={this.updatePopOver} pagination={true} onPaginationChanged={this.paginationChanged} getRowNodeId={this.state.getRowNodeId}>
                </AgGridReact>
                {(this.state.rowSelected || this.state.isTags) ? <Flyout selectedRowData={this.data} arr={this.state.arr} updateRowData={this.updateRowData} selectedOptions={this.state.selectedOptions} closeFlyout={this.closeFlyout} isFlyoutVisible={this.state.isFlyoutVisible} /> : ''}

                <Pagination rowPerPage={this.state.paginationPageSize} callbackPagination={this.callbackPagination} pageCount={this.state.pageCount} goToPage={this.goToPage} />
            </div >
        );
    }
}
export default Aggrid
