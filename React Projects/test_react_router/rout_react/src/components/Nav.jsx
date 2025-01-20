import React from 'react'
import { Link ,NavLink} from 'react-router'
export default function Nav() {
  return (
    <div>
      
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/us'>contect with us</Link></li>
      </ul>
    </div>
  )
}
