import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '@elastic/eui/dist/eui_theme_light.css'
import { EuiIcon, EuiButtonIcon, EuiPopover, EuiSwitch, EuiSpacer } from '@elastic/eui';
import ComboBox from './ComboBox';
let api = '';
class Aggrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPopoverOpen: false,
            isFirstName: true,
            IsFirstNameDisplay: true,
            isLastName: true,
            isBranch: true,
            isDob: true,
            isConatct: true,
            isEmail: true,
            isAction: true,
            isTags: true,
            filterData: null,
            columnDefs: [{
                headerName: "FirstName", field: "firstName", checkboxSelection: true, hide: false,
            }, {
                headerName: "LastName", field: "lastName",
            }, {
                headerName: "Branch", field: "branch",
            }, {
                headerName: "DateOfBirth", field: "dateOfBirth",
            }, {
                headerName: "Contact", field: "contact",
            }, {
                headerName: "Email", field: "email",
            }, {
                headerName: "Actions", field: "action",
                cellRendererFramework: function (params) {
                    const deleteRow = () => {
                        // const selectedRows = api.getSelectedNodes()
                        // const selectedRow = selectedRows[0]
                        const selectedData = api.getSelectedRows();
                        api.updateRowData({ remove: selectedData });

                    }
                    return (
                        <>
                            <EuiIcon type="trash" onClick={deleteRow} />
                        </>
                    )
                }
            }, {
                headerName: "Tags", field: "tags", width: 400, cellRendererFramework: function () {
                    return <ComboBox />
                }
            },
            ],
            defaultColDef: {
                width: 150,
                height: 100,
                editable: true,
                resizable: true,
                sortable: true,
                filter: true,
                colResizeDefault: 'shift',
                autoHeight: true,
                rowHeight: 500,
                enablePivot: true,
                enableValue: true,
            },
            paginationNumberFormatter: function (params) {
                return '[' + params.value.toLocaleString() + ']';
            },
            filterData: [],
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
            }
            ],
        };
        this.searchData = this.searchData.bind(this);
        this.rowHeight = 200;
    }


    componentDidMount() {
        this.setState({
            filterData: this.state.rowData

        })
    }
    updateData = data => {
        this.setState({ rowData: data })
        api.paginationGoToPage(4)
    }
    onGridReady = params => {
        api = params.api;
        this.columnApi = params.columnApi;

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
    closePopover() {
        this.setState({
            isPopoverOpen: false,
        });
    }
    PopOver = () => {
        this.setState({
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    }
    displayPopOver(value, col, set) {
        this.setState({
            [set]: value,
        })
        this.columnApi.setColumnVisible(col, value)
    }

    updatePopOver(e) {
        this.setState({
            isFirstName: this.columnApi.getColumn('firstName').visible,
            isLastName: this.columnApi.getColumn('lastName').visible,
            isBranch: this.columnApi.getColumn('branch').visible,
            isDob: this.columnApi.getColumn('dateOfBirth').visible,
            isConatct: this.columnApi.getColumn('contact').visible,
            isEmail: this.columnApi.getColumn('email').visible,
            isAction: this.columnApi.getColumn('action').visible,
            isTags: this.columnApi.getColumn('tags').visible,
        })

    }
    onPageSizeChanged = newPageSize => {
        const value = document.getElementById('page-size').value;
        api.paginationSetPageSize(Number(value));
    };
    render() {
        const button = (
            <EuiButtonIcon
                iconType="managementApp"
                iconSize="original"
                // iconSide="right"
                onClick={this.PopOver.bind(this)}
            >
            </EuiButtonIcon>
        );
        const { columnDefs, defaultColDef, filterData, isFirstName, isLastName,
            isAction, isBranch, isConatct, isDob, isEmail, isTags, } = this.state
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '45vh',
                    width: '100%'
                }}
            >
                <h2 className="bg-dark display-4 text-light" >Ag-Grid</h2>
                <div style={{ float: 'right' }}>
                    <EuiPopover
                        ownFocus
                        button={button}
                        // panelPaddingSize='none'
                        isOpen={this.state.isPopoverOpen}
                        closePopover={this.closePopover.bind(this)}
                    >
                        <div>
                            <EuiSwitch
                                label="FirstName"
                                checked={isFirstName}
                                onChange={e => this.displayPopOver(e.target.checked, 'firstName', "isFirstName")}
                            />
                            <EuiSpacer size="s" />
                            <EuiSwitch
                                label="LastName"
                                checked={isLastName}
                                onChange={e => this.displayPopOver(e.target.checked, 'lastName', "isLastName")}
                            />
                            <EuiSpacer size="s" />
                            <EuiSwitch
                                label="Branch"
                                checked={isBranch}
                                onChange={e => this.displayPopOver(e.target.checked, 'branch', "isBranch")}
                            />
                            <EuiSpacer size="s" />
                            <EuiSwitch
                                label="DateOfBirth"
                                checked={isDob}
                                onChange={e => this.displayPopOver(e.target.checked, 'dateOfBirth', "isDob")}
                            />
                            <EuiSpacer size="s" />
                            <EuiSwitch
                                label="Contact"
                                checked={isConatct}
                                onChange={e => this.displayPopOver(e.target.checked, 'contact', "isConatct")}
                            />
                            <EuiSpacer size="s" />
                            <EuiSwitch
                                label="Email"
                                checked={isEmail}
                                onChange={e => this.displayPopOver(e.target.checked, 'email', "isEmail")}
                            />
                            <EuiSpacer size="s" />
                            <EuiSwitch
                                label="Action"
                                checked={isAction}
                                onChange={e => this.displayPopOver(e.target.checked, 'action', "isAction")}
                            />
                            <EuiSpacer size="s" />
                            <EuiSwitch
                                label="Tags"
                                checked={isTags}
                                onChange={e => this.displayPopOver(e.target.checked, 'tags', "isTags")}
                            />
                        </div >
                    </EuiPopover>
                </div>
                <input className="p-2 m-2 " type="text" onChange={this.searchData} placeholder="Search" />
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={filterData}
                    defaultColDef={defaultColDef}
                    rowDataChangeDetectionStrategy='IdentityCheck'
                    onGridReady={this.onGridReady}
                    rowSelection="multiple"
                    onDragStopped={e => this.updatePopOver(e)}
                    pagination={true}
                >
                </AgGridReact>
                <div className="test-header">
                    Rows per page:
                <select onChange={() => this.onPageSizeChanged()} id="page-size">
                        <option value="2" selected="">2 </option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10" selected>10</option>
                        <option value="20" selected>20</option>

                    </select>
                </div>
                <button className=" btn btn-primary p-2 m-2 " onClick={this.onButtonClick}>Get selected rows</button>

            </div >
        );
    }
}

export default Aggrid

