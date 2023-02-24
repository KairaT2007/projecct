import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logo } from '../../assets'
import AuthDB from '../../Auth/auth'

import "./Header.scss"

const Header = () => {
  const { user } = useSelector((state) => state.user)
  const { googleAuth, logout } = AuthDB()

  const handleClick = () => {
    if (!user) {
      googleAuth()
    } else {
      logout()
    }
  }

  const navigate = useNavigate();

  const handleClick2 = (link) => {
    navigate(link);
  }

  return (
    <div className='h'>
      <div className='user'>
        {user ? (
          <>
            <img src={user.photoURL} alt="" />
            <span className='text-white'>{user.displayName}</span>
          </>
        ) : 
          <>
            <img src="data:image/jpeg;base64,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" alt="" />
            <span className='text-white'></span>
          </>
        }
      </div>
      <div className='logo'>
        <img onClick={() => handleClick2('/')} src={logo} alt="" />
      </div>
      <div className="buttons">
        <button className="close" onClick={handleClick}>{user ? "LogOut" : "LogIn"}</button>
      </div>
    </div>
  )
}

export default Header