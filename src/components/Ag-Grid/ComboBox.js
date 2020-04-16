import React, { useState, Fragment } from 'react';

import {
    EuiComboBox,
    EuiButton,
    EuiFormRow,
    EuiModal,
    EuiModalBody,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiOverlayMask,
    //   EuiSpacer,
} from '@elastic/eui';
import { EuiFlexGroup } from '@elastic/eui';


const options = [
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

export default () => {

    const [selectedOptions, setSelected] = useState([options[2], options[4]]);
    const [isModalVisible, setModalVisible] = useState(false);
    //   const [isPopoverOpen, setPopover] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
       
    };

    const showModal = () => {
        setModalVisible(true);
    };

    //   const togglePopover = () => {
    //     setPopover(!isPopoverOpen);
    //   };

    const onChange = selectedOptions => {
        setSelected(selectedOptions);
    };

    const onCreateOption = (searchValue, flattenedOptions = []) => {
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

        // Create the option if it doesn't exist.
        if (
            flattenedOptions.findIndex(
                option => option.label.trim().toLowerCase() === normalizedSearchValue
            ) === -1
        ) {
            options.push(newOption);
        }

        // Select the option.
        setSelected([...selectedOptions, newOption]);
    };

    const comboBox = (
        <EuiComboBox
            // placeholder="Select or create options"
            options={options}
            selectedOptions={selectedOptions}
            onChange={onChange}
            onCreateOption={onCreateOption}
        />
    );

    let modal;

    if (isModalVisible) {
        modal = (
            <EuiOverlayMask>
                <EuiModal onClose={closeModal} style={{ width: '800px' }}>
                    <EuiModalHeader>
                        <EuiModalHeaderTitle>Combo box in a modal</EuiModalHeaderTitle>
                    </EuiModalHeader>

                    <EuiModalBody>{comboBox}</EuiModalBody>
                </EuiModal>
            </EuiOverlayMask>
        );
    }

    return (
        <Fragment>
            <EuiFlexGroup>
                <EuiFormRow>
                    {comboBox}
                </EuiFormRow>
                {/* <EuiSpacer /> */}

                {/* <EuiPopover
    id="popover"
    ownFocus
    button={button}
    isOpen={isPopoverOpen}
    closePopover={closePopover}>
    <div style={{ width: '300px' }}>{comboBox}</div>
  </EuiPopover> */}

                {/* <EuiSpacer size="m" /> */}

                <EuiButton size='s' onClick={showModal}>Show Modal</EuiButton>


                {modal}
            </EuiFlexGroup>

        </Fragment>

    );
};