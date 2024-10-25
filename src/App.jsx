import './App.css';
import React from "react";
import Landing from "./Components/Landing";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminSignUp from './Components/AdminSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHomePage from './Components/AdminHomePage';

const App = () => {
  return (  
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
        <Route path='/adminhomepage' element={<AdminHomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
// SDLC seartc ?
 
export default App;

// product list 
// cost 
// login page 
// sign up page 
// admin 
// user 
