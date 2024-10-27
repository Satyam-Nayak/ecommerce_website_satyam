import React from 'react'
import AdminNavbar from './AdminNavbar'
import '../styles/AdminHomePage.css'
import Footer from './Footer'
import AdminAddProduct from './AdminAddProduct'
// import { Routes } from 'react-router-dom'

export default function AdminHomePage() {
  return (
    <div className='adminHome1'>
        <AdminNavbar/>
        <div className='homestart'>
        <h1 >Hello Admin</h1>
        <AdminAddProduct/>
        </div>
        
        <Footer/>
    </div>
  )
}
