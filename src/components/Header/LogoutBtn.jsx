import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../features/auth/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        authservice.logout().then(() => {
            dispatch(logout())
        }).catch((error) => {console.log(error);
        })
    }
  return (
    <button className=' text-white inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
onClick={handleLogout}>Logout</button>
  )
}

export default LogoutBtn