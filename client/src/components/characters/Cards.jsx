import React from 'react'
import {useSelector} from "react-redux"
import {Card} from "../characters/Card"

export const Cards = () => {
    const characters = useSelector(state => state.characters);

  return (
    <>
    {characters.length>0?
       characters?.map(character=>(<Card characters={character}/>)):
       <h1>Loading</h1>

     }

    </>
  )
}
