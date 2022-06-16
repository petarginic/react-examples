import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Signup, Login, Calculation, Test, TodoList, Buttons, Footballers, FootballerDetail } from './pages'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'

const App = () => {
    const location = useLocation()

    return (
        <TransitionGroup>
            <CSSTransition timeout={400} classNames="fade" key={location.key}>
                <Routes location={location}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/calculation" element={<Calculation />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/footballers/:id" element={<FootballerDetail />} />
                    <Route path="/footballers" element={<Footballers />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default App
