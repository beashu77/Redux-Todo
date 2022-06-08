import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={{display:"flex",justifyContent:"Space Around"}}>
        <Link to ="/">CounterApp</Link>
        <Link to ="/TodoApp">TodoApp</Link>
        <hr></hr>
    </div>
  )
}

export default Navbar