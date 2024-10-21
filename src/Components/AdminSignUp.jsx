import React from 'react'
import '../styles/AdminSignUp.css';
// import axios from 'axios';


function AdminSignUp() {
  return (
    <div className='AdminSignUp'>
        <div className='bg_img'></div>
        <form onSubmit={addAdmin} action="">
            <label htmlFor="">Name :</label>
            <input type="text" placeholder='Enter the name' />
            <label htmlFor="">Email :</label>
            <input type="email" placeholder='Enter the email' />
            <label htmlFor="">Password :</label>
            <input type="password" placeholder='Enter the password' />
            <label htmlFor="">Number :</label>
            <input pattern='' type="number" placeholder='Enter the number' />
            <br /><br />
            <button style={{borderRadius:'20px'}} className='signupbtn'>Submit</button>
            
        </form>
        
      
    </div>
  )
}
export default AdminSignUp;


// axios