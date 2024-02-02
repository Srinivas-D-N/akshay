import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/FireBase'
import { UseDispatch, useDispatch } from 'react-redux'
import { addUser,removeUser } from '../Utils/userSlice'

const Body = () => {
  const dispatch = useDispatch()
  const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "browse",
        element: <Browse/>
    }
])

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const {uid, email, displayName} = user;
      dispatch(addUser({uid:uid, email: email, displayName: displayName}))
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
    }
  });
})


  return (
    <div>
   <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
