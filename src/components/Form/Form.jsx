import React from 'react'
import { Link } from "react-router-dom"

const Form = (props) => {
  return (

    <div className='form'>
      <section className="h-100 gradient-form rounded">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">
                        <Link to="/">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }} alt="logo" />
                        
                        </Link>
                        
                        <h3 className="mt-1 mb-5 pb-1">
                          {props.type === "login" ? "Welcome back" : props.type === "signup" ? "Get's Started" : null}
                        </h3>

                        {props.type === "login" ? (
                          <p> Dont have an account? <Link to="/signup"> Signup </Link></p>
                        ) : props.type === "signup" ? (

                          <p> Already have an account? <Link to="/login"> Login </Link></p>


                        ) : null}

                      </div>

                      <form onSubmit={props.handleSubmit}>


                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example11">Username</label>
                          <input type="email" className="form-control" 
                          value={props.email} 
                          onChange={props.onChangeEmail} 
                          
                          />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example22">Password</label>
                          <input type="password" className="form-control" 
                          value={props.password}
                          onChange={props.onChangePassword}
                           />

                        </div>


                        {props.type === "signup" ? (

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example22"> Confirm Password</label>
                            <input type="password" className="form-control"
                            
                            value={props.confirmPassword}
                            onChange={props.onChangeConfirmPassword}/>

                          </div>
                        ) : null}



                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-danger" type="submit">
                            
                            
                          {props.type === "login" ? "Login" : props.type === "signup" ? "Signup" : null}
                            
                            </button>
                          
                        </div>

                       

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center align-items-center gradient-custom-2">
                    <img src="https://cdn.dribbble.com/uploads/601/original/ff7474bc9245e3ac5a25cff4f39b2707.png?1544835635" alt="ker"  width={500} height="auto"
                    style={{ borderRadius: '2rem'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form