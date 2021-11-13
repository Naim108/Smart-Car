
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

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
        <div>
            <div>
                <div>
                    <div>Register</div>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <input
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            />
                        <input
                            
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                             />
                        <input
                            
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                             />
                        <input
                            
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            />

                        <button  type="submit" >Register</button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <a variant="text">Already Registered? Please Login</a>
                        </NavLink>
                    </form>}
                    {isLoading && 'please wait'}
                    
                    {authError && <p>Success</p>}
                </div>
            </div>
        </div>
    );
};

export default Register;
