import React from 'react'

function Button(props) {
    return (
        <button className={`button ${(props.class)}`}>
            <span>{props.text}</span><i></i>
        </button>
    )
}

export default Button