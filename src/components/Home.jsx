import React from 'react'
import { NavLink } from 'react-router-dom';


const home = () => {
  return (
    <>
      <div className='flex flex-row gap-4 place-content-center mt-10'>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/NotesApp">
          NotesApp
        </NavLink>
        <NavLink to="/Calculator">
        Calculator
        </NavLink>
        <NavLink to="/Practice">
          Practice
        </NavLink>
        <NavLink to="/Weather">
          Whether
        </NavLink>
        <NavLink to="/Recipe">
          Recipe
        </NavLink>
        <NavLink to="/Smtv">
          SMTV
        </NavLink>
      </div>
    </>
  )
}

export default home