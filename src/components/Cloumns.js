import React from 'react'

function Cloumns() {
    const items = []
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>TITLE</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Jatin</td>
        </React.Fragment>
    )
}

export default Cloumns
