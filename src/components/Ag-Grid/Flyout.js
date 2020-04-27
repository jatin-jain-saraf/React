import React, { Component, Fragment } from 'react';
import {
    EuiFlyout,
    EuiFlyoutBody,
    EuiFlyoutFooter,
    EuiText,
    EuiBadge
} from '@elastic/eui';
export default class Flyout extends Component {
    remove = (e) => {
        const { arr } = this.props
        arr.forEach((item, index) => {
            if (item.label === e.currentTarget.title) {
                arr.splice(index, 1)
                this.setState({
                    selectedOptions: arr
                }, () => {
                    this.props.updateRowData(this.state.selectedOptions)
                })
            }
        });
    }
    render() {
        const { selectedRowData, isFlyoutVisible, closeFlyout, arr } = this.props
        const keys = Object.keys(selectedRowData)
        let b = []
        if (arr) {
            b = arr
        }
        if (isFlyoutVisible) {
            return (
                <div>
                    <EuiFlyout
                        onClose={() => closeFlyout(false,arr)}
                        aria-labelledby="flyoutTitle"
                        size='s'
                    >
                        <EuiFlyoutBody>
                            <EuiText>
                                {
                                    keys.map(key => {
                                        return (
                                            <div>
                                                <h3>{key} :--  {selectedRowData[key]}</h3>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    b.map(item => {
                                        return <EuiBadge color="hollow" iconType="cross" iconSide="right" iconOnClick={this.remove} iconOnClickAriaLabel={item.label} onClickAriaLabel={item.label}>{item.label}</EuiBadge>
                                    })
                                }
                            </EuiText>
                        </EuiFlyoutBody>
                        <EuiFlyoutFooter>
                        </EuiFlyoutFooter>
                    </EuiFlyout>
                </div >
            )
        } else {
            return (
                <Fragment>

                </Fragment>
            )
        }
    }
}

