import React, { Component } from "react";
import {
    EuiComboBox,
    EuiModal,
    EuiModalBody,
    EuiOverlayMask,
    EuiButtonIcon,
    EuiFlexGroup,
} from "@elastic/eui";
export default class ElasticComboBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    label: 'Titan',
                    'data-test-subj': 'titanOption',
                },
                {
                    label: 'Enceladus',
                },
                {
                    label: 'Mimas',
                },
                {
                    label: 'Dione',
                },
                {
                    label: 'Iapetus',
                },
                {
                    label: 'Phoebe',
                },
                {
                    label: 'Rhea',
                },
                {
                    label:
                        "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
                },
                {
                    label: 'Tethys',
                },
                {
                    label: 'Hyperion',
                },
            ],
            selectedOptions: [],
            isModalVisible: false,
        };
    }

    closeModal = (e) => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
        });

    };

    showModal = () => {
        this.setState({
            isModalVisible: true,
        });
    };

    onChange = (selectedOptions) => {
        this.setState({
            selectedOptions: selectedOptions,
        });
    };

    onCreateOption = (searchValue, flattenedOptions = []) => {
        if (!searchValue) {

            return;
        }

        let normalizedSearchValue = searchValue.trim().toLowerCase();
        console.log('NNNormal', normalizedSearchValue)

        if (!normalizedSearchValue) {
            return;
        }

        const newOption = {
            label: searchValue,
        };
        if (
            flattenedOptions.findIndex(
                (options) =>
                    options.label.trim().toLowerCase() === normalizedSearchValue
            ) === -1
        ) {
            this.setState({
                options: [...this.state.options, newOption],
            });
        }
        this.setState({
            selectedOptions: [...this.state.selectedOptions, newOption],
        });
    };
    componentDidMount() {
        let { options } = this.state;
        this.setState({
            selectedOptions: [options[2]],
            selectedOptions: [options[2]],
        });
    }
    render() {
        const comboBox = (
            <div>
                <EuiComboBox
                    options={this.state.options}
                    selectedOptions={this.state.selectedOptions}
                    onChange={this.onChange}
                    onCreateOption={this.onCreateOption}
                ></EuiComboBox>
            </div>
        );
        let modal;
        if (this.state.isModalVisible) {
            modal = (
                <EuiOverlayMask >
                    <EuiModal onClose={e => this.closeModal(e)} style={{ width: "800px" }}>
                        <EuiModalBody>{comboBox}</EuiModalBody>
                    </EuiModal>
                </EuiOverlayMask>
            );
        }
        return (
            <div>
                <EuiFlexGroup>
                    {comboBox}
                    <EuiButtonIcon
                        iconType="plusInCircle"
                        onClick={this.showModal}
                    ></EuiButtonIcon>
                    {modal}
                </EuiFlexGroup>
            </div >
        );
    }
}