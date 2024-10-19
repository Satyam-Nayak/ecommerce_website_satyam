import React, { useState, useEffect } from 'react';
import '../styles/UserLogin.css';

export default function UserLogin() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [user, setUser] = useState([]); 

  // Fetch user data
  useEffect(() => {
    async function fetchUser() {
      try {
        let data = await fetch('http://localhost:2626/Admin');
        let res = await data.json();
        setUser(res); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUser(); 
  }, []);
  console.log(user)

  // Login function with validation
  function login() {
    if (!username || !password) {
      alert("Username and Password cannot be empty");
      return;
    }
    let value = user.filter((x) =>  // Changed from admin to user
      x.username.toLowerCase() === username.toLowerCase() && x.password === password
    );
    alert(value.length > 0 ? "User Login Successful" : "Invalid User"); // Changed message accordingly
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
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder='Enter the password' 
          required
        />
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  );
}
