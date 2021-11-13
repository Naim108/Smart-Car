
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import logo from '../../../images/20944201.jpg'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
       <div className="container">
           <div className="row">
               <div className="col-md-5">
               <div>
                <div className="form-design">
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <input  className="inputField"
                            label="Your Name"
                            placeholder="Name"
                            name="name"
                            onBlur={handleOnBlur}
                            /> <br />
                        <input  className="inputField"
                            placeholder="Email"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                             /> <br />
                        <input
                             className="inputField"
                            label="Your Password"
                            placeholder="Enter Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                             /> <br />
                        <input
                         className="inputField"
                         placeholder="Re-enter Password"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            /> <br />


                        <button className="btn btn-warning"  type="submit" >Register</button>
                        <br />
                        <br />
                        <br />
                        <NavLink
                           
                            to="/login">
                            <a>Already Registered? Please Login</a>
                        </NavLink>
                    </form>}
                    <div className="mt-5">
                    {isLoading && 'Please Wait'}
                    </div>
                    
                </div>
            </div>
               </div>
           <div className="col-md-7">
            <img className="logo" src={logo} alt="" />

            </div>
            </div>
       </div>
    );
};

export default Register;
