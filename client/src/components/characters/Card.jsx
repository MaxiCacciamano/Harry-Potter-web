import React from 'react'
import {Link} from "react-router-dom";


export const Card = ({characters}) => {
    const {name, image, actor, house, id} = characters


  return (
    <>
    <div>
    <Link to={`/characters/${id}`}>
        <img src={image} alt="Not found"/>

    </Link>
        <h2>{name}</h2>
        <h3>{actor}</h3>
        <span>{house}</span>
    </div>

    </>
  )
}
