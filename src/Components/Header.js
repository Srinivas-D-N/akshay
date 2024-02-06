import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/FireBase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../Utils/FireBase'
import { UseDispatch, useDispatch } from 'react-redux'
import { addUser,removeUser } from '../Utils/userSlice'
import { useEffect } from 'react';
import { LOGO } from '../Utils/Constants';

const Header = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const user= useSelector((store)=> store.user)
  function handleSignOut(){
    signOut(auth).then(() => {
      
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}));
        // navigate("/browse")
        // ...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  },[])
  return (
    <div className= " absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img 
       
        style={{width:"150px"}}
        src=
{LOGO}        alt='logo'
        />
       { user && <div className="flex">
          <img 
          className="w-12 h-12 "
          alt="usericom"
          src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYh1GXyzHI-IqH5gUm3DHnqwmPCTLO5rmui76NzrDHgzMA7or4fZQUjLBsrXzx0JiwagUlQSf7Wiu4yI-A4hfpwleGn8R3g.png?r=54d"/>
          <button onClick={handleSignOut}
          className='font-bold text-white'
          >(sign out)</button>
        </div>}
    
    </div>
  )
}

export default Header
