import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";


const Login = () => {
  const { signInWithGoogle,setUser ,loginWithEmailAndPassword, setIsLoading} = useAuth();

const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

const [email , setEmail]= useState("")
const [password , setPassword] = useState("")


const handleGetEmail = (e) =>{
  setEmail(e.target.value);
}

const handleGetPassword = (e)=> {
    setPassword(e.target.value);
}




const handleLoginWithEmailAndPassword=(e)=>{
    e.preventDefault();

    loginWithEmailAndPassword(email,password)
    .then((res) => {
      setIsLoading(true)
        setUser(res.user);
        history.push(url)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false)
      })
}





  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((res) => 
        {
          setIsLoading(true)
          setUser(res.user)
          history.push(url)
        }
          )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <div className="text-center mt-5 form-design  container">
      <h2>This is Login </h2>
      <form onSubmit={handleLoginWithEmailAndPassword}>
          <input className="inputField" type="email" onBlur={handleGetEmail} placeholder="Email"/>
          <br/>
          <input className="inputField" type="password" onBlur={handleGetPassword} placeholder="Password"/>
          <br/>
          <br/>
          <input className="btn btn-success fw-bold" type="submit" value ="Signin"/>

      </form>
      <button  className="google-btn mt-5 btn" onClick={handleGoogleSignin}>Google Sign In</button>
      <p> New User Food cart ?
          <br /><Link to="/register">Please register</Link ></p>

    </div>
  );
};

export default Login;