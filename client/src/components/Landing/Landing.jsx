import React from 'react'
import {Link} from "react-router-dom";

export const Landing = () => {
  return (
      <>
      <div>
    <h1>Harry Potter</h1>
    <h2>Saga</h2>
    </div>
    <button >
        <Link  to="/home" >
              Home
        </Link>
    </button>
    </>
  )
}
export default Landing;