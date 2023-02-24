import React from 'react'
import "./Footer.scss"
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';

const Footer = () => {

  return (
    <div className='f'>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <Link to="https://www.instagram.com/maserati/"><li><BsInstagram /></li></Link>
        <Link to="https://www.facebook.com/Maserati/"><li><BsFacebook /></li></Link>
        <Link to="https://twitter.com/Maserati_HQ"><li><BsTwitter /></li></Link>
        <Link to='https://www.youtube.com/maserati'><li><BsYoutube /></li></Link>
      </ul>
    </div>
  )
}

export default Footer