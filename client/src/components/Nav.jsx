import React from 'react'
import {Link} from 'react-router-dom'
import { getUser,logout } from '../../services/authorize'

function Nav() {
  return (
    <div className="nav-container">
        <ul>
            <Link to='/'><li>หน้าแรก</li></Link>
            <Link to='/create'><li>เขียนบทความ</li></Link>
            {!getUser() && <Link to='/login'><li>เข้าสู่ระบบ</li></Link>}
            {getUser() && <button onClick={()=>logout()}><li>ออกจากระบบ</li></button>}
        </ul>
    </div>
  )
}

export default Nav