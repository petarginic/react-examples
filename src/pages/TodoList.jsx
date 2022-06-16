import React, { useState, useEffect } from 'react'
import { Todo, CreateForm } from './../components'

const TodoList = () => {
    const [title, setTitle] = useState('')
    const [duty, setDuty] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const temp = localStorage.getItem('duty')
        const loadedTodos = JSON.parse(temp)

        if (loadedTodos) {
            setDuty(loadedTodos)
        }
    }, [])

    useEffect(() => {
        const json = JSON.stringify(duty)
        localStorage.setItem('duty', json)
    }, [duty])

    const createNewId = () => {
        setCounter(counter + 1)
        return counter
    }

    const handleClickCreate = (title) => {
        const newDuty = {
            id: createNewId(),
            title: title,
            done: false,
        }

        setDuty([...duty, newDuty])
        document.getElementById('submit').value = ''
    }

    const handleDelete = (id) => {
        const updatedTodos = [...duty].filter((todo) => todo.id !== id)
        setDuty(updatedTodos)
    }

    const handleEdit = (id) => {
        let editedDuty = prompt('Changde duty')
        const updatedTodos = [...duty].map((todo) => {
            if (todo.id === id) {
                todo.title = editedDuty
            }
            return todo
        })
        setDuty(updatedTodos)
    }

    const handleDone = (id) => {
        const updatedTodos = [...duty].map((todo) => {
            if (todo.id === id) {
                todo.done = true
            }
            return todo
        })

        setDuty(updatedTodos)
    }

    const doneTodo = {
        color: 'green',
    }

    return (
        <div className=" main d-flex justify-content-center align-items-center">
            <div className="todo-container container">
                <div className="todo-header">
                    <div className="title">
                        <h2>To-Do List</h2>
                        <button className="btn btn-primary">X</button>
                    </div>

                    <div className="todo-welcome">
                        <h1>Welcome Petar Ginic</h1>
                    </div>
                </div>

                <div className="container d-flex justify-content-center">
                    <CreateForm
                        onChangeTitle={(e) => {
                            setTitle(e.target.value)
                        }}
                        id="submit"
                        onSubmit={(e) => {
                            handleClickCreate(title)
                            e.preventDefault()
                        }}
                    />
                </div>

                <div className="container">
                    {duty.map((duty) => {
                        return (
                            <div className="todo-duty">
                                <Todo
                                    key={duty.id}
                                    title={duty.title}
                                    id={duty.id}
                                    style={duty.done ? doneTodo : null}
                                />
                                <div className="buttons">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            handleDone(duty.id)
                                        }}
                                    >
                                        Done
                                    </button>
                                    <button
                                        className="btn btn-warning "
                                        onClick={() => {
                                            handleEdit(duty.id)
                                        }}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger "
                                        onClick={() => {
                                            handleDelete(duty.id)
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList
