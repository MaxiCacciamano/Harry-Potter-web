import React from 'react'
import {useDispatch} from "react-redux"
import {Cards} from "../characters/Cards";
export const Home = () => {
    const dispatch = useDispatch();
  return (
    <>
       <div>
         <Cards/>
       </div>
    </>
  )
}
