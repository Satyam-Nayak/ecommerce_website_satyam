import React, { useState } from 'react'
import '../styles/AdminLogin.css'
export default function AdminLogin() {
  let [username,setUsername] = useState("");
  let [setpassword,setPassword] = useState("");
  console.log(username);
  console.log(setpassword);

  // password set function
function login(){
  if(username === "admin" && setpassword === "admin"){
    alert("Admin Login Successfull");
}
else{
  alert("Invalid Admin");
  }
}


  return (
    <div className='AdminLogin'>
      <form action="">
        <label htmlFor="">
          Username :
        </label>
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter the User Name'  required/>
        <label htmlFor="">
          Password :
        </label>
        <input type="password" value={setpassword} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the password' required/>
        <button onClick={login}>Login</button>
      </form>
    </div>
  )
}
