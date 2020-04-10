import React from 'react'

function MemoCompo({ name }) {
    console.log("rendring memo");

    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoCompo)
