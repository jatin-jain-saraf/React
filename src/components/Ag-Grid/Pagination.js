import React, { useState } from 'react';

import {
    EuiButtonEmpty,
    EuiContextMenuItem,
    EuiContextMenuPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPopover,
} from '@elastic/eui';
export default (props) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const { rowPerPage, pageCount } = props;
    let rowCount = rowPerPage;
    const PAGE_COUNT = pageCount;
    //console.log(pageCount)
    //console.log(rowPerPage)
    const onButtonClick = () => setIsPopoverOpen(isPopoverOpen => !isPopoverOpen);
    const closePopover = (pageSize) => {
        setIsPopoverOpen(false);
        props.callbackPagination(pageSize)

    };

    const goToPage = pageNumber => {
        setActivePage(pageNumber);
        props.goToPage(pageNumber);
    }

    const button = (
        <EuiButtonEmpty
            size="s"
            color="text"

            iconType="arrowDown"
            iconSide="right"
            onClick={onButtonClick}>
            Rows per page:{rowCount}
        </EuiButtonEmpty>
    );

    const items = [
        <EuiContextMenuItem
            key="3 rows"
            icon="empty"
            onClick={() => {
                rowCount = 3;
                //console.log(rowCount)
                closePopover(3);

            }}>
            3 rows
    </EuiContextMenuItem>,
        <EuiContextMenuItem
            key="4 rows"
            icon="empty"
            onClick={() => {
                closePopover(4);

            }}>
            4 rows
    </EuiContextMenuItem>,
        <EuiContextMenuItem
            key="8 rows"
            icon="none"
            onClick={() => {
                closePopover(8);

            }}>
            8 rows
    </EuiContextMenuItem>,
        <EuiContextMenuItem
            key="12 rows"
            icon="empty"
            onClick={() => {
                closePopover(12);

            }}>
            12 rows
    </EuiContextMenuItem>,
    ];
    return (
        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
                <EuiPopover
                    button={button}
                    isOpen={isPopoverOpen}
                    closePopover={closePopover}
                    panelPaddingSize="none">
                    <EuiContextMenuPanel items={items} />
                </EuiPopover>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
};