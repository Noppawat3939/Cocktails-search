import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

function Navbar() {

  const [show, setShow] = useState(false);
  const ControlNavbar = () => {
    if(window.scrollY > 200) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', ControlNavbar)
    return () => {
      window.removeEventListener('scroll', ControlNavbar)
    }
  }, []);
  
  return (
    <div className={`navbar ${show &&  'active'}`}>
      <div className="nav-center">
        <NavLink to='/'>
          <img src="https://cdn-icons-png.flaticon.com/512/920/920707.png" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar