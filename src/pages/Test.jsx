import React, { useState, useMemo, useReducer } from 'react'
import { Modal } from '../components'
import countryList from 'react-select-country-list'

const Test = (props) => {
    const [clicked, setClicked] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')

    // const[ emailMessage, setEmailMessage] = useState('')
    // const [ passwordMessage, setPasswordMessage] = useState('')
    const initialState = { email: '', password: '' }
    const [message, setMessage] = useReducer(
        (message, updates) => ({
            ...message,
            ...updates,
        }),
        initialState
    )

    const handleInputChange = (e, setState) => {
        setState(e.target.value)
    }

    const handleOptionChange = (option, setOption) => {
        setOption(option)
    }

    const genders = [
        {
            value: 'male',
            label: 'Male',
        },
        {
            value: 'female',
            label: 'Female',
        },
    ]

    const countries = useMemo(() => countryList().getData(), [])

    const emailValidation = () => {
        const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

        if (email === '') {
            setMessage({ email: 'Enter your email address' })
            return false
        } else if (email !== '') {
            if (emailRegEx.test(email)) {
                setMessage({ email: '' })
                return true
            } else if (!emailRegEx.test(email)) {
                setMessage({ email: 'Email is not Valid' })
                return false
            }
        }
    }

    const passwordValidation = () => {
        const passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{7,}$/gm

        if (password === '') {
            setMessage({ password: 'Enter your password' })
            return false
        } else if (password !== '') {
            if (passRegEx.test(password)) {
                setMessage({ password: '' })
                return true
            } else if (!passRegEx.test(password)) {
                setMessage({ password: 'Use at least 7 char and at least one number' })
                return false
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailValidation()
        passwordValidation()

        if ((emailValidation() === true) & (passwordValidation() === true)) {
            alert(`Welcome ${firstName} ${lastName}`)
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center bg-primary " style={{ height: '100vh' }}>
            <button
                className="btn btn-warning"
                onClick={() => {
                    setClicked(true)
                }}
                style={{ display: clicked === true && 'none' }}
            >
                Open Modal
            </button>
            {clicked === true ? (
                <div style={{ display: clicked === false && 'none' }}>
                    <Modal
                        closeModal={() => {
                            setClicked(false)
                        }}
                        firstName={firstName}
                        onChangeFirstName={(e) => {
                            handleInputChange(e, setFirstName)
                        }}
                        lastName={lastName}
                        onChangeLastName={(e) => {
                            handleInputChange(e, setLastName)
                        }}
                        email={email}
                        emailMessage={message.email}
                        onChangeEmail={(e) => {
                            handleInputChange(e, setEmail)
                        }}
                        password={password}
                        passwordMessage={message.password}
                        onChangePassword={(e) => {
                            handleInputChange(e, setPassword)
                        }}
                        address={address}
                        onChangeAddress={(e) => {
                            handleInputChange(e, setAddress)
                        }}
                        city={city}
                        onChangeCity={(e) => {
                            handleInputChange(e, setCity)
                        }}
                        countries={countries}
                        country={country}
                        onChangeCountry={(country) => {
                            handleOptionChange(country, setCountry)
                        }}
                        genders={genders}
                        gender={gender}
                        onChangeGender={(gender) => {
                            handleOptionChange(gender, setGender)
                        }}
                        handleSubmit={handleSubmit}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default Test
