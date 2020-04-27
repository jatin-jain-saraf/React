import React, { Component } from 'react'
import { EuiPopover, EuiButtonIcon } from '@elastic/eui'
import { EuiSwitch } from '@elastic/eui'
import { EuiSpacer } from '@elastic/eui'
class DynamicPopover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPopoverOpen: false,
            visibility: []
        }
    }
    componentDidMount = () => {
        const { columnDefs } = this.props;
        const columnObject = {};
        columnDefs.map((item) => {
            return columnObject[item.field] = true
        });
        this.setState({
            visibility: columnObject
        })
    }
    // closePopover = () => {
    //     this.setState({
    //         isPopoverOpen: false,
    //     });
    // }
    PopOver = () => {
        this.setState({
            visibility: this.props.updateVisibility,
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    }
    displayPopOver = (value, colName) => {
        this.state.visibility[colName] = value;
        let newValue = this.state.visibility
        const { columnApi } = this.props
        this.setState({
            visibility: newValue
        })
        columnApi.setColumnVisible(colName, value)
    }

    // onChangeState = (value, visibility, field) => {
    //     for (let key in visibility) {
    //         if (key === field) {
    //             this.setState(prevState => ({
    //                 visibility: {                   // object that we want to update
    //                     ...prevState.visibility,    // keep all other key-value pairs
    //                     [field]: value              // update the value of specific key
    //                 }
    //             }), () => {
    //                 // console.log('Visibility', this.state.visibility)
    //             });
    //         }
    //     }
    // }

    render() {
        const { columnDefs } = this.props
        return (
            <>
                <EuiPopover
                    ownFocus
                    button={<EuiButtonIcon
                        aria-label="Popover"
                        iconType="managementApp"
                        iconSize="original"
                        onClick={this.PopOver}
                    >
                    </EuiButtonIcon>}
                    isOpen={this.state.isPopoverOpen}
                    closePopover={this.closePopover}
                >
                    {
                        columnDefs.map((col, index) => {
                            return (
                                <div key={index}>
                                    <EuiSwitch
                                        label={col.field}
                                        checked={this.state.visibility[col.field]}
                                        onChange={e => {
                                            this.displayPopOver(e.target.checked, col.field)
                                        }}
                                    />
                                    <EuiSpacer size='s' />

                                </div>
                            )
                        })
                    }
                </EuiPopover>
            </>
        )
    }
}

export default DynamicPopover