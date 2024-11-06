import React from 'react'
import { Link } from 'react-router-dom'
import AdminAccount from './AccountDropdown'
import '../styles/AdminNavbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function AdminNavbar() {
  return (
    <div className='AdminNavbar'>
        <div className='logo'>
            <h1>E<span>Kart</span></h1>
        </div>

        <div className='links'>
     <Link to='/adminaddproduct'>Add Items</Link>
     </div>
        <AdminAccount/>
    </div>
  )
}
