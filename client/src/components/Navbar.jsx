import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
        <h1>CRUD</h1>
        <div>
            <ul>
               <Link to='/'><li>Home</li></Link> 
                <Link to = '/add'><li>Add</li></Link>
               <Link to='/all'> <li>All</li></Link>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar