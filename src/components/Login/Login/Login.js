import React, { useState } from "react";
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import './Login.css'
import logo from '../../../images/20944201.jpg'

const Login = () => {
  const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
  return (
      <div className="container">
              <div className="row">
        <div className="col-md-5">
        <div className="form-design">
        <div>
            <form onSubmit={handleLoginSubmit}>
                <input className="inputField"
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    /> <br />
                <input
                 className="inputField"
                    
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                     /> <br />

                <button className="btn-warning btn" type="submit" >Login</button>
                <br />
                <br />
                <Link
                    to="/register">
                    <a>New User? Please Register</a>
                </Link>
                {isLoading && <p>Please waite a moment..........</p>}
                {authError && <p>{authError}</p>}
            </form>
            
            <button className="google-btn btn" onClick={handleGoogleSignIn} >Google Sign In</button>
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

export default Login;