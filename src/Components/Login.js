import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [signInForm, setSignInForm ] = useState(true);
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
        <form className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white z-100 rounded-lg bg-opacity-80">
          <h1 className='font-bold text-3xl py-4'>
            {signInForm ? "Sign In " : "Sign Up"}</h1>
           
            {!signInForm && (<input
            className='p-2 my-2 w-full bg-gray-800 rounded-lg'
            type="text"
            placeholder='Full Name'  />) }

          <input
           className='p-2 my-2 w-full bg-gray-800 rounded-lg'
           type="text" 
           placeholder='Email Address' 
            />
          

          <input
            className='p-2 my-2 w-full bg-gray-800 rounded-lg'
            type="password"
            placeholder='password'  />
          
          <button 
          className='py-2 my-4 bg-red-700 w-full rounded-lg'>
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
