import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import './Register.css'


const Register = () => {
   
     
    const { signInWithGoogle, createAccountWithGoogle,setUser , setIsLoading , updateName } = useAuth();
// after login user back exact location
    const history= useHistory()
    const location = useLocation()
    const url= location.state?.from || "/home"

const [name , setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleName=(e)=> {
   setName(e.target.value)
}

const handleEmail=(e)=> {
   setEmail(e.target.value)
}

const handlePassword=(e)=> {
   setPassword(e.target.value)
}



const handleRegistration=(e)=> {
    // stop form loading
    e.preventDefault();
    createAccountWithGoogle(email,password)
    .then((res) => {
      setIsLoading(true)
      updateName(name)
        setUser(res.user)
        history.push(url)
      })
      .catch((error) => {
      })
      .finally(()=> {
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
       <div  className="text-center mt-5 form-design  container">
           <form onSubmit={handleRegistration}>
               <input className="inputField" type="text"  onBlur={handleName}placeholder="name"/>
               <br/>
               <input className="inputField" type="email" onBlur={handleEmail} placeholder="email"/>
               <br/>
               <input className="inputField" type="password"  onBlur={handlePassword} placeholder="password"/>
               <br/>
               <input className="btn btn-success fw-bold" type="submit" value="Register" placeholder="create"/>
               <br/>
           </form>
           <button className="google-btn mt-5 btn"  onClick={handleGoogleSignin}>Google Sign In</button>
           <p> Already Signed Up Smart Car? <br /><Link  to="/login">Please Login</Link ></p>
       </div>
    );
};

export default Register;