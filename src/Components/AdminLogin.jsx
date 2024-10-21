import React, { useEffect, useState } from 'react'
import '../styles/AdminLogin.css'
import { Link } from "react-router-dom";

export default function AdminLogin() {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");
  let [admin,setAdmin] = useState([]);

  // Fetch admin data
  useEffect(()=>{
    async function fetchAdmin() {
      let data = await fetch('http://localhost:2626/Admin')
      let res = await data.json();
      setAdmin(res)
    }
    fetchAdmin()
  },[]);
  console.log(admin)

// password set function
  function login() {
    let value = admin.filter((x)=>
      {return x.username === username && x.password === password})
    alert(value.length > 0 ? "Admin Login Successful" : "Invalid Admin");
  }


  return (
    <div className='AdminLogin'>
      <form className='admin1' action="">
        <label htmlFor="">
          Username :
        </label>
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter the User Name'  required/>
        <label htmlFor="">
          Password :
        </label>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the password' required/>
        <button style={{borderRadius:'4px',marginTop:'20px'}} onClick={login}>Login</button>
        <br />
        <span style={{color: 'white'}}>Click here to :
        <Link to='/adminsignup'> Sign Up</Link></span>
        
      </form>
    </div>
  );
}
