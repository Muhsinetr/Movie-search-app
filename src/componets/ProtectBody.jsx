import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectBody = ()=> {
    const {auth} = useContext(AuthContext); 
  return (auth ? <Outlet/> : <Navigate to='/login'/>)
}
