import React from 'react'

const Todo = (props) => {
    return (
        <div className="todo-item">
            <div className="todo-title">
                <h3 style={props.style}>
                    {props.id} {props.title}
                </h3>
            </div>
        </div>
    )
}

export default Todo
