import React, { useState } from 'react'
import { Form } from './../components'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <div className="signup-page">
            <Form
                type="signup"
                handleSubmit={(e) => {
                    e.preventDefault()
                    console.log('login')

                    if (password === confirmPassword) {
                        alert(`succes. Your email is ${email}, and pass is ${password}`)
                    } else {
                        alert('Bad input')
                    }
                }}
                email={email}
                onChangeEmail={(e) => {
                    setEmail(e.target.value)
                }}
                password={password}
                onChangePassword={(e) => {
                    setPassword(e.target.value)
                }}
                confirmPassword={confirmPassword}
                onChangeConfirmPassword={(e) => {
                    setConfirmPassword(e.target.value)
                }}
            />
        </div>
    )
}

export default Signup
