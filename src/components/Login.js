import { TextField } from '@material-ui/core';
import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <Helmet>
                <title>Mp-Theme-18 | Login</title>
            </Helmet>

            {/* login wrapper start */}
            < div className="login-wrapper" >
                <div className="all-login">
                    {/* Login Form Part Start */}
                    <div className="leftside-outer">
                        <div className="form-part">
                            <div>
                                <a onClick={e => e.preventDefault()} href="-" title="My Theme" className="logo">
                                    <img src={'./assets/images/logo.svg'} alt="My Theme" />
                                </a>
                                <div className="form-group">
                                    <TextField label="Username" />
                                </div>
                                <div className="form-group">
                                    <TextField label="Password" type="password" />
                                </div>
                                <a onClick={e => e.preventDefault()} href="-" title="Forgot password?" className="forgot-password primary-link">Forgot password?</a>
                                <Link title="Login" to='/Dashboard' className="btn btn-primary">Login</Link>
                            </div>
                        </div>
                        <div className="login-footer ">
                            <p>Don’t have an account? <a onClick={e => e.preventDefault()} href="-" target="_blank" className="primary-link" title="Sign up">Sign
                                up</a>
                            </p>
                        </div>
                    </div>
                    {/* Login Form Part End */}

                    {/* Login background Part Start */}
                    <div className="rightside-outer">
                        <div>
                            <h4>Join our community</h4>
                            <p>Lorem ipsum dolor sit ipsum consequuntur
                                voluptatem asperiores aliquam, ducimus magni sint!</p>
                        </div>
                    </div>
                    {/* Login background Part End */}

                </div>
            </div>
            {/* login wrapper end */}
        </>
    );
}

export default Login;