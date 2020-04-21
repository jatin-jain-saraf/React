import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import '@elastic/eui/dist/eui_theme_light.css'
import ComboBox from './ComboBox'
import Delete from './Delete'
import FilterBox from './FilterBox';
// import Popover from './Popover';
import Pagination from './StaticPagination';
import DynamicPopover from './DynamicPopover'
import Flyout from './Flyout';
// import Flyout from './Flyout';
let api = '';
class Aggrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlyoutVisible: true,
            rowSelected: false,
            colState: null, paginationPageSize: 5, pageCount: null, IsFirstNameDisplay: true, filterData: null,
            columnDefs: [{ headerName: "FirstName", field: "firstName", hide: false, },
            { headerName: "LastName", field: "lastName" },
            { headerName: "Branch", field: "branch" },
            { headerName: "DateOfBirth", field: "dateOfBirth" },
            { headerName: "Contact", field: "contact" },
            { headerName: "Email", field: "email" },
            { headerName: "Actions", field: "action", cellRendererFramework: (params) => <Delete delete={this.deleteRow} /> },
            { headerName: "Tags", field: "tags", width: 300, cellRendererFramework: () => <ComboBox /> },],
            defaultColDef: {
                width: 150, height: 100, editable: true, resizable: true, sortable: true, filter: true, colResizeDefault: 'shift', autoHeight: true, rowHeight: 500, enablePivot: true, enableValue: true,
            },
            filterData: [],
            rowData: [{ firstName: "Hardik", lastName: "Motwani", branch: "IT", dateOfBirth: "20-02-1998", contact: 8488866756, email: "hardik.motwani@rapidops.com" },
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
        this.rowHeight = 200;
    }
    componentDidMount() {
        this.setState({
            filterData: this.state.rowData
        })
    }
    deleteRow = () => {
        const selectedData = api.getSelectedRows();
        api.updateRowData({ remove: selectedData });
    }
    updateData = data => {
        this.setState({ rowData: data })
        api.paginationGoToPage(4)
    }
    onGridReady = params => {
        api = params.api;
        this.columnApi = params.columnApi;
        api.sizeColumnsToFit()
        this.setState({
            pageCount: api.paginationProxy.totalPages,
            colState: this.columnApi.getColumnState()
        })
    }
    onSelectionChanged = () => {
        this.data = api.getSelectedRows()[0]

        this.setState({
            rowSelected: true,
            isFlyoutVisible:true
        })
    }
    onButtonClick = e => {
        const selectedNodes = api.getSelectedNodes()
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
    // updatePopOver = (e) => {
    //     this.setState({
    //         isFirstName: this.columnApi.getColumn('firstName').visible, isLastName: this.columnApi.getColumn('lastName').visible,
    //         isBranch: this.columnApi.getColumn('branch').visible, isDob: this.columnApi.getColumn('dateOfBirth').visible,
    //         isConatct: this.columnApi.getColumn('contact').visible, isEmail: this.columnApi.getColumn('email').visible,
    //         isAction: this.columnApi.getColumn('action').visible, isTags: this.columnApi.getColumn('tags').visible,
    //     })
    // }
    callbackPagination = (pageSize) => {
        api.paginationSetPageSize(pageSize)
        this.setState({
            paginationPageSize: pageSize
        })
    }
    closeFlyout = (params) => {

        this.setState({
            isFlyoutVisible: params
        })
    }
    goToPage = (pageNumber) => {
        api.paginationGoToPage(pageNumber)
    }
    paginationChanged = () => {
        if (api) {
            this.setState({
                pageCount: api.paginationProxy.totalPages
            })
        }
    }
    render() {
        const { columnDefs, defaultColDef, filterData } = this.state
        return (
            <div className="ag-theme-balham-dark" style={{ height: '50vh', width: '100%' }}>
                <div style={{ float: 'right' }}>
                    <DynamicPopover columnDefs={columnDefs} columnApi={this.columnApi} />
                    {/* <Popover isFirstName={this.state.isFirstName} isLastName={this.state.isLastName} isBranch={this.state.isBranch} isDob={this.state.isDob} isConatct={this.state.isConatct}
                        isEmail={this.state.isEmail} isAction={this.state.isAction} isTags={this.state.isTags} isOpen={this.state.isPopoverOpen} closePopover={this.closePopover}
                        PopOver={this.PopOver} displayPopOver={this.displayPopOver} /> */}
                </div>
                <FilterBox searchData={this.searchData} />
                {/* <Flyout /> */}
                <AgGridReact columnDefs={columnDefs} rowData={filterData} defaultColDef={defaultColDef} rowDataChangeDetectionStrategy='IdentityCheck' onGridReady={this.onGridReady}
                    rowSelection="multiple" onDragStopped={e => this.updatePopOver(e)} pagination={true} onPaginationChanged={this.paginationChanged} onSelectionChanged={this.onSelectionChanged}>
                </AgGridReact>
                {this.state.rowSelected ? <Flyout selectedRowData={this.data} closeFlyout={this.closeFlyout} isFlyoutVisible={this.state.isFlyoutVisible} /> : ''}
                <Pagination rowPerPage={this.state.paginationPageSize} callbackPagination={this.callbackPagination} pageCount={this.state.pageCount} goToPage={this.goToPage} />
            </div >
        );
    }
}
export default Aggrid
