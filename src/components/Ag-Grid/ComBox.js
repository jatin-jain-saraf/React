import React, { Fragment, Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '@elastic/eui/dist/eui_theme_light.css'
import {
    EuiComboBox,
    EuiButton,
    EuiFormRow,
    EuiModal,
    EuiModalBody,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiOverlayMask,
} from '@elastic/eui';
import { EuiFlexGroup } from '@elastic/eui';
let modal;

class ComBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOptions: [],
            Selected: this.options[this.selectedOptions],
            isModalVisible: false,
            // setModalVisible: false,

        }
    }
    options = [
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
    ];

    closeModal = () => {

        this.setState({
            isModalVisible: !this.isModalVisible
        })

    };
    showModal = () => {

        this.setState({
            isModalVisible: true
        })
    };
    onChange = (e) => {
        console.log(this.state.selectedOptions);

        this.setState({
            selectedOptions: this.Selected
        })
    };
    onCreateOption = (searchValue, flattenedOptions = []) => {
        if (!searchValue) {
            return;
        }
        const normalizedSearchValue = searchValue.trim().toLowerCase();

        if (!normalizedSearchValue) {
            return;
        }
        const newOption = {
            label: searchValue,
        };
        if (
            flattenedOptions.findIndex(
                option => option.label.trim().toLowerCase() === normalizedSearchValue
            ) === -1
        ) {

            this.options.push(newOption);
        }

        this.setState({
            Selected: [...this.state.selectedOptions, newOption]
        })
        // console.log(this.state.Selected);

    };
    render() {
        const comboBox = (
            <EuiComboBox
                placeholder="Select"
                options={this.options}
                selectedOptions={this.state.selectedOptions}
                onChange={e => this.onChange(e)}
                onCreateOption={this.onCreateOption}
            />)
        if (this.state.isModalVisible) {
            modal = (
                <EuiOverlayMask>
                    <EuiModal onClose={() => this.closeModal()} >
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>Combo box in a modal</EuiModalHeaderTitle>
                        </EuiModalHeader>

                        <EuiModalBody>{comboBox}</EuiModalBody>
                    </EuiModal>
                </EuiOverlayMask >
            );
        }
        return (
            <Fragment>
                <EuiFlexGroup>
                    <EuiFormRow>
                        {comboBox}
                    </EuiFormRow>
                    <EuiButton size='s' onClick={this.showModal}>Show Modal</EuiButton>


                    {modal}
                </EuiFlexGroup>

            </Fragment>

        );
    }

};
export default ComBox;