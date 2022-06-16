import React from 'react'
import Select from 'react-select'

const Modal = (props) => {
    const imgUrl =
        'https://image.shutterstock.com/image-photo/young-man-studio-looking-cameraportrait-260nw-139246634.jpg'
    return (
        <div className="user-form">
            <div className="top-content">
                <div className="header">
                    <h3> Edit Profile</h3>
                    <button className="btn btn-warning" onClick={props.closeModal}>
                        X
                    </button>
                </div>

                <div className="user-panel">
                    <div className="user-image" style={{ backgroundImage: `url(${imgUrl})` }}>
                        {' '}
                    </div>
                    <div className="panel-buttons">
                        <button className="btn btn-warning">Remove</button>
                        <button className="btn btn-warning">Change</button>
                    </div>
                </div>
            </div>

            <form>
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="">First Name</label>
                        <input type="text" value={props.firstName} onChange={props.onChangeFirstName} />
                    </div>
                    <div className="input">
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={props.lastName} onChange={props.onChangeLastName} />
                    </div>
                    <div className="input">
                        <label htmlFor="">Email</label>
                        <input type="email" value={props.email} onChange={props.onChangeEmail} />
                        <span className="text-danger">{props.emailMessage}</span>
                    </div>
                    <div className="input">
                        <label htmlFor="">Password</label>
                        <input type="password" value={props.password} onChange={props.onChangePassword} />
                        <span className="text-danger">{props.passwordMessage}</span>
                    </div>
                    <div className="input">
                        <label htmlFor="">Address</label>
                        <input type="text" value={props.address} onChange={props.onChangeAddress} />
                    </div>
                    <div className="input">
                        <label htmlFor="">City</label>
                        <input type="text" value={props.city} onChange={props.onChangeCity} />
                    </div>
                    <div className="input">
                        <label htmlFor="">Country</label>
                        <Select options={props.countries} value={props.country} onChange={props.onChangeCountry} />
                    </div>
                    <div className="input">
                        <label htmlFor="">Gender</label>
                        <Select options={props.genders} value={props.gender} onChange={props.onChangeGender} />
                    </div>
                </div>

                <div className="submit-btn">
                    <button className="btn btn-warning" onClick={props.handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Modal
