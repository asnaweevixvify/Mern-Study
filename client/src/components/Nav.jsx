import React from 'react'
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-container">
        <ul>
            <Link to='/'><li>หน้าแรก</li></Link>
            <Link to='/create'><li>เขียนบทความ</li></Link>
        </ul>
    </div>
  )
}

export default Nav