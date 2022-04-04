import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cocktail.css';

function Cocktail({glass, id, image, info, name}) {
  return (
    <article className='cocktail'>
        <div className="img-container">
            <img src={image} alt={name} />
        </div>
        <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <NavLink to={`/cocktail/${id}`} className='btn btn'>details</NavLink>
        </div>
    </article>
  )
}

export default Cocktail