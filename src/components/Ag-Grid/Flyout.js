import React, { Component } from 'react';

import {
    EuiFlyout,
    EuiFlyoutBody,
    EuiFlyoutFooter,
    EuiText,
} from '@elastic/eui';
export default class Flyout extends Component {
    render() {
        const { selectedRowData, isFlyoutVisible } = this.props
        const keys = Object.keys(selectedRowData)
        console.log(keys);

        if (isFlyoutVisible) {
            return (
                <div>
                    <EuiFlyout
                        onClose={() => this.props.closeFlyout(false)}
                        aria-labelledby="flyoutTitle"
                        size='s'
                    >
                        <EuiFlyoutBody>
                            <EuiText>
                                {
                                    keys.map(key => {
                                        return (
                                            <h3>{key} :--  {selectedRowData[key]}</h3>
                                        )
                                    })
                                }
                            </EuiText>
                        </EuiFlyoutBody>

                        <EuiFlyoutFooter>
                        </EuiFlyoutFooter>
                    </EuiFlyout>
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}

