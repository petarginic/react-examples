import React from 'react'

const FourBtn = (props) => {
    return (
        <div>
            <button style={props.style} onClick={props.onClick}>
                {props.name}
            </button>
        </div>
    )
}

export default FourBtn
