import React, { Component, Fragment } from "react";
import {
    EuiComboBox,
    EuiButtonIcon,
    EuiPopover,
    EuiBadge, EuiToolTip
} from "@elastic/eui";
import { euiPaletteColorBlindBehindText } from '@elastic/eui/lib/services';
import { EuiFlexItem, EuiFlexGroup } from "@elastic/eui";
import { EuiButtonEmpty } from "@elastic/eui";
const visColorsBehindText = euiPaletteColorBlindBehindText();
export default class ElasticComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    label: 'Jatin',
                    'data-test-subj': 'titanOption',
                    color: visColorsBehindText[0],
                },
                {
                    label: 'Ravi',
                    color: visColorsBehindText[1],
                },
                {
                    label: 'Hardik',
                    color: visColorsBehindText[2],
                },
                {
                    label: 'Dhairya',
                    color: visColorsBehindText[3],
                },
                {
                    label: 'Nawal',
                    color: visColorsBehindText[4],
                },
                {
                    label: 'Aman',
                    color: visColorsBehindText[5],
                },
                {
                    label: 'Meet',
                    color: visColorsBehindText[6],
                },
                {
                    label:
                        "Sweta",
                    color: visColorsBehindText[7],
                },
                {
                    label: 'Prashant',
                    color: visColorsBehindText[8],
                },
                {
                    label: 'Mayure',
                    color: visColorsBehindText[9],
                },
            ],
            selectedOptions: [],
            isPopoverOpen: false,
        };
    }
    closePopover = (e) => {
        this.setState({
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    };
    showPopover = () => {
        this.setState({
            isPopoverOpen: true,
        });
    };
    onChange = (selectedOptions) => {
        this.setState({
            selectedOptions: selectedOptions,
        }, () => {
            this.props.updateRowData(this.state.selectedOptions)
        });
    };
    onCreateOption = (searchValue, flattenedOptions = []) => {
        if (!searchValue) {
            return;
        }
        let normalizedSearchValue = searchValue.trim().toLowerCase();

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
        }, () => {
            this.props.updateRowData(this.state.selectedOptions)
        });
    };
    componentDidMount() {
        this.setState({
            selectedOptions: [],
        });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.selectedOptions.length !== this.props.selectedOptions.length) {
            this.setState({
                selectedOptions: this.props.selectedOptions
            }, () => {
                console.log(this.state.selectedOptions);

            })
            console.log(prevProps.selectedOptions);

        }

    }
    remove = (e) => {
        console.log(this.props.selectedOptions);

        this.state.selectedOptions.forEach((item, index) => {
            if (item.label === e.currentTarget.title) {
                this.state.selectedOptions.splice(index, 1)
                this.setState({
                    selectedOptions: this.state.selectedOptions
                }, () => {
                    this.props.updateRowData(this.state.selectedOptions)
                })
            }
        });
    }
    animateTag = (e) => {
        const { selectedOptions } = this.state
        let option = selectedOptions.map(opt => {
            return opt.label
        })
        option.splice(0, 1)
        return (<p>{option.toString()}</p>)
    }
    render() {
        const { selectedOptions, options, isPopoverOpen } = this.state
        const comboBox = (

            < div >
                {/* {selectedOptions = this.props.arr} */}

                <EuiComboBox
                    fullWidth={true}
                    options={options}
                    selectedOptions={selectedOptions}
                    onChange={this.onChange}
                    onCreateOption={this.onCreateOption}
                />
            </div >
        );
        const button = (
            <EuiButtonIcon
                aria-label='This is a plus button'
                iconType="plusInCircle"
                onClick={this.showPopover}
            ></EuiButtonIcon>)
        if (selectedOptions.length <= 1) {
            return (
                <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiPopover
                            async
                            // display="inlineBlock"
                            button={button}
                            isOpen={isPopoverOpen}
                            closePopover={this.closePopover}>
                            <div style={{ width: '200px' }}>{comboBox}</div>
                        </EuiPopover>
                    </EuiFlexItem>
                    {
                        selectedOptions.map((option, index) => {
                            return (
                                <EuiFlexItem grow={false} key={index}>
                                    <EuiBadge color="hollow" iconType="cross" iconSide="right" iconOnClick={this.remove} onClickAriaLabel={option.label} iconOnClickAriaLabel={option.label}  >
                                        {option.label}
                                    </EuiBadge>
                                </EuiFlexItem>
                            )
                        })
                    }
                </EuiFlexGroup>
            );
        } else {
            return (
                <Fragment>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiPopover
                                async
                                button={button}
                                isOpen={isPopoverOpen}
                                closePopover={this.closePopover}>
                                <div style={{ width: '200px' }}>{comboBox}</div>
                            </EuiPopover>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiBadge color="hollow" iconType="cross" iconSide="right" iconOnClick={this.remove} onClickAriaLabel={selectedOptions[0].label} iconOnClickAriaLabel={selectedOptions[0].label}  >
                                {selectedOptions[0].label}
                            </EuiBadge>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiToolTip position="top" content={this.animateTag()}>
                                <EuiButtonEmpty style={{ color: 'white' }}>{`+${selectedOptions.length - 1}`}</EuiButtonEmpty>
                            </EuiToolTip>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </Fragment>
            )
        }
    }
}