import React from 'react'
import {Link} from 'react-router-dom'



class Forgot extends React.Component{
    render(){
        return(

            <div className="container justify-content-center align-items-center d-flex h-100" style={{marginTop: '3rem'}}>
					<div className="card fat">
                    <div className="card-body">
                        <h4 className="card-title">Forgot Password</h4>
                        <form method="POST" className="my-login-validation" novalidate="">
                            <div className="form-group">
                                <label htmlFor="email">E-Mail Address</label>
                                <input id="email" type="email" className="form-control" name="email" value="" required autofocus/>
                                <div className="invalid-feedback">
                                    Email is invalid
                                </div>
                                <div className="form-text text-muted">
                                    By clicking "Reset Password" we will send a password reset link
                                </div>
                            </div>

                            <div className="form-group m-0">
                                
                                    <Link to="/Reset" className="btn btn-primary btn-block">
                                    Reset Password
                                    </Link>
                             </div>
                                
                            
                        </form>
                    </div>
                </div>
                </div>
                )
                }
                }
    export default Forgot;