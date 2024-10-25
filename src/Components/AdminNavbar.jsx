import React from 'react'
// import { Link } from 'react-router-dom'
import AdminAccount from './AccountDropdown'

export default function AdminNavbar() {
  return (
    <div className='AdminNavbar'>
        <div className='logo'>
            <h1>E<span>Kart</span></h1>
        </div>
        {/* <div className='links'>
            <Link to='/viewproducts'>ShoppingList</Link>
            <Link to='/viewcart'><Shopingcarticon/>Cart</Link>
        </div> */}
        <div className='account'>
            <AdminAccount/>
        </div>
    </div>
  )
}
