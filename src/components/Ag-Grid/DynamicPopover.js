import React, { Component } from 'react'
import { EuiPopover, EuiButtonIcon } from '@elastic/eui'
import { EuiSwitch } from '@elastic/eui'
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
            columnObject[item.field] = true
        });
        this.setState({
            visibility: columnObject
        })
    }
    closePopover = () => {
        this.setState({
            isPopoverOpen: false,
        });
    }
    PopOver = () => {
        this.setState({
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    }
    displayPopOver = (value, col) => {
        this.state.visibility[col] = value;
        let newValue = this.state.visibility
        const { columnApi } = this.props
        this.setState({
            visibility: newValue
        })
        columnApi.setColumnVisible(col, value)
    }
    render() {
        const { columnDefs } = this.props
        return (
            <>
                <EuiPopover
                    ownFocus
                    button={<EuiButtonIcon
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
