import React, { Component } from 'react'
import { EuiPopover, EuiSwitch, EuiSpacer, EuiButtonIcon } from '@elastic/eui';

export class Popover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isPopoverOpen: false,

        }
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
    render() {
        const {
            isFirstName, isLastName, isBranch, isDob, isConatct, isEmail, isAction, isTags, PopOver, closePopover, displayPopOver, isOpen } = this.props;
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
                    <div>
                        <EuiSwitch
                            label="FirstName"
                            checked={isFirstName}
                            onChange={e => displayPopOver(e.target.checked, 'firstName', "isFirstName")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="LastName"
                            checked={isLastName}
                            onChange={e => displayPopOver(e.target.checked, 'lastName', "isLastName")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Branch"
                            checked={isBranch}
                            onChange={e => displayPopOver(e.target.checked, 'branch', "isBranch")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="DateOfBirth"
                            checked={isDob}
                            onChange={e => displayPopOver(e.target.checked, 'dateOfBirth', "isDob")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Contact"
                            checked={isConatct}
                            onChange={e => displayPopOver(e.target.checked, 'contact', "isConatct")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Email"
                            checked={isEmail}
                            onChange={e => displayPopOver(e.target.checked, 'email', "isEmail")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Action"
                            checked={isAction}
                            onChange={e => displayPopOver(e.target.checked, 'action', "isAction")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Tags"
                            checked={isTags}
                            onChange={e => displayPopOver(e.target.checked, 'tags', "isTags")}
                        />
                    </div >
                </EuiPopover>
            </>
        )
    }
}

export default Popover
