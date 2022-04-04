import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css';
import {CgHomeAlt} from 'react-icons/cg';

function Error() {
  return (
    <div className='error'>
      <div className="error-container">
        <h1>Oops! <span>Page is not find</span></h1>
        <NavLink to='/'>
          Back
          <CgHomeAlt />
        </NavLink>
      </div>
    </div>
  )
}

export default Error