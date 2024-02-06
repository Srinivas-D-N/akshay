import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidate } from '../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Utils/FireBase';

import { UseDispatch, useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { USER_AVATAR } from '../Utils/Constants';
const Login = () => {
    const [signInForm, setSignInForm ] = useState(true);
    const [errorMessage, setErrorMessage]= useState(null)
   
    const dispatch= useDispatch()
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const navigate = useNavigate()

    function handleButtonClick(){
      //validate form data
    const message= checkValidate(email.current.value, password.current.value)
    setErrorMessage(message)
    if(message) return;
    if(!signInForm){
      createUserWithEmailAndPassword(auth,
        email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: {USER_AVATAR}
    }).then(() => {
      // Profile updated!
      // ...
      const {uid, email,displayName,photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid: uid,
          email:email,
          displayName: displayName,
          photoURL: photoURL
        })
      )
      navigate("/browse");
      
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"_"+errorMessage)
    // ..
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }

    }

    function toggleSignForm(){
    setSignInForm(!signInForm)
    }
    
  return (
    <div>
     <Header/>
     <div className="absolute ">
        <img 
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="logo"/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white z-100 rounded-lg bg-opacity-80">
          <h1 className='font-bold text-3xl py-4'>
            {signInForm ? "Sign In " : "Sign Up"}</h1>
           
            {!signInForm && (<input
            ref={name}
            className='p-2 my-2 w-full bg-gray-800 rounded-lg'
            type="text"
            placeholder='Full Name'  />) }

          <input
           className='p-2 my-2 w-full bg-gray-800 rounded-lg'
           ref={email}
           type="text" 
           placeholder='Email Address' 
            />
          

          <input
          ref={password}
            className='p-2 my-2 w-full bg-gray-800 rounded-lg'
            type="password"
            placeholder='password'  />

            <p className='font-bold text-red my-2'>{errorMessage}</p>
          
          <button 
          className='py-2 my-4 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}>
           {signInForm ? "Sign In " : "Sign Up"}
        </button>
        <p className='my-4 cursor-pointer' onClick={toggleSignForm}>
        {signInForm ? "new to NetFlix? sign up now " 
        : "AllReady registered"}</p>
     
        </form>
    </div>
  )
}

export default Login
