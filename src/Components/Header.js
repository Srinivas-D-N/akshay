import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/FireBase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user= useSelector((store)=> store.user)
  function handleSignOut(){
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className= " absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img 
       
        style={{width:"150px"}}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt='logo'
        />
       {user && <div className="flex">
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
