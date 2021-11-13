import React, { useState } from "react";
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";


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
    <div>
    <div div spacing={2}>
        <div item sx={{ mt: 8 }} xs={12} md={6}>
            <div variant="body1" gutterBottom>Login</div>
            <form onSubmit={handleLoginSubmit}>
                <input
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    />
                <input
                    
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                     />

                <button  type="submit" >Login</button>
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <button>New User? Please Register</button>
                </NavLink>
                {isLoading && <p>Please waite a moment..........</p>}
                {user?.email && <p>Login Successful</p>}
                {authError && <p>{authError}</p>}
            </form>
            <p>------------------------</p>
            <button onClick={handleGoogleSignIn} >Google Sign In</button>
        </div>
    </div>
</div>
  );
};

export default Login;