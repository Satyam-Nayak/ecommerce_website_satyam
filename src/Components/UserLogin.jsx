import React, { useState } from 'react';
import '../styles/UserLogin.css';

export default function UserLogin() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState(""); // corrected here
  
  console.log(username);
  console.log(password); // corrected here

  // password set function
  function login() {
    if (username === "satyamn120" && password === "satyam120") { // corrected here
      alert("User Login Successful");
    } else {
      alert("Invalid User");
    }
  }

  return (
    <div className='UserLogin'>
      <form action="">
        <label>
          Username:
        </label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder='Enter the User Name'  
          required
        />
        <label>
          Password:
        </label>
        <input 
          type="password" 
          value={password} // corrected here
          onChange={(e) => setPassword(e.target.value)} // corrected here
          placeholder='Enter the password' 
          required
        />
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  );
}
