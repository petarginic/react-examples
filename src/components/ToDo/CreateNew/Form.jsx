import React from 'react'

const Form = (props) => {
    return (
        <div className="f-flex justify-content-center align-items-center">
            <form onSubmit={props.onSubmit}>
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Add new duty"
                        value={props.title}
                        onChange={props.onChangeTitle}
                        id={props.id}
                    />
                    <button class="btn btn-primary" type="submit">
                        Add New
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
