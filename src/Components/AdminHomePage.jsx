import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminDropdown from './AccountDropdown'

export default function AdminHomePage() {
  return (
    <div className='adminHome1'>
        <AdminNavbar/>
        <AdminDropdown/>
      <h1>Hello Admin</h1>
    </div>
  )
}
