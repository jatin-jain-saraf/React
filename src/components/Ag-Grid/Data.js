import React, { Component } from 'react'
import './ComboBox';
import {
    EuiIcon
} from '@elastic/eui';
import ComboBox from './ComboBox';
export class Data extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterData: null,
            columnDefs: [{
                headerName: "FirstName", field: "firstName", checkboxSelection: true
            }, {
                headerName: "LastName", field: "lastName",
            }, {
                headerName: "Branch", field: "branch",
            }, {
                headerName: "Tags", field: "tags", cellRendererFramework: function () {
                    return (
                        <div>
                            <ComboBox />
                        </div>
                    )
                }
            }, {
                headerName: "DateOfBirth", field: "dateOfBirth",
            }, {
                headerName: "Contact", field: "contact",
            }, {
                headerName: "Email", field: "email",
            }, {
                headerName: "Action", field: "actions", cellRendererFramework: function () {

                    return (
                        <div>
                            <span>
                                <EuiIcon type="trash" />
                            </span>

                        </div>
                    )
                }
            }
            ],
            defaultColDef: {
                editable: true,
                resizable: true,
                sortable: true,
                filter: true
            },
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
            }, {
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

    }
    render() {
        const { columnDefs, defaultColDef, filterData } = this.state

        return (
            <div>

            </div>
        )
    }
}

export default Data
