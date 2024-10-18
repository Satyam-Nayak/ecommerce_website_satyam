import React, { useEffect, useState } from 'react'
import '../styles/AdminLogin.css'

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

  // satyam========
  // function login(event) {
  //   event.preventDefault();
  
  //   const adminUser = admin.find(user => user.username === username && user.password === password);
  
  //   alert(adminUser ? "Admin Login Successful" : "Invalid Admin");
  // }

  // satyam========
  // function login(x) {
  //   x.preventDefault(); 
  
  //   const value = admin.filter(user => user.username === username && user.password === password);
    
  //   alert(value.length > 0 ? "Admin Login Successful" : "Invalid Admin");
  // }

  function login() {
    let value = admin.filter((x)=>
      {return x.username === username && x.password === password})
    alert(value.length > 0 ? "Admin Login Successful" : "Invalid Admin");
  }

  // password set function



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
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the password' required/>
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}
