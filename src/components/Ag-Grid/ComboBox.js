import React, { useState, Fragment } from 'react';

import {
    EuiComboBox,
    EuiFormRow,
} from '@elastic/eui';
import { EuiFlexGroup } from '@elastic/eui';


const options = [
    {
        label: 'motwani',
        'data-test-subj': 'titanOption',
    },
    {
        label: 'Enceladus',
    },
    {
        label: 'meet',
    },
    {
        label: 'Dione',
    },
    {
        label: 'ravi',
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

        if (
            flattenedOptions.findIndex(
                option => option.label.trim().toLowerCase() === normalizedSearchValue
            ) === -1
        ) {
            options.push(newOption);
        }

        setSelected([...selectedOptions, newOption]);
    };

    const comboBox = (
        <EuiComboBox
            options={options}
            selectedOptions={selectedOptions}
            onChange={onChange}
            onCreateOption={onCreateOption}
        />
    );
    return (
        <Fragment>
            <EuiFlexGroup>
                <EuiFormRow>
                    {comboBox}
                </EuiFormRow>

            </EuiFlexGroup>

        </Fragment>

    );
};