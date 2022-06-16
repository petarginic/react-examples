import React, { useState } from 'react'
import { FourBtn } from '../components'

const Buttons = () => {
    const [clicked, setClicked] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
    })

    const activeButtonStyle = {
        color: 'white',
        backgroundColor: 'red',
    }

    return (
        <div className="buttons-page">
            <div className="buttons-container">
                <FourBtn
                    name="1"
                    style={clicked.first ? activeButtonStyle : null}
                    onClick={() => {
                        setClicked({ first: true })
                    }}
                />
                <FourBtn
                    name="2"
                    style={clicked.second ? activeButtonStyle : null}
                    onClick={() => {
                        setClicked({ second: true })
                    }}
                />
                <FourBtn
                    name="3"
                    style={clicked.third ? activeButtonStyle : null}
                    onClick={() => {
                        setClicked({ third: true })
                    }}
                />
                <FourBtn
                    name="4"
                    style={clicked.fourth ? activeButtonStyle : null}
                    onClick={() => {
                        setClicked({ fourth: true })
                    }}
                />
            </div>
        </div>
    )
}

export default Buttons
