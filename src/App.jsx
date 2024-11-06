import './App.css';
import React from "react";
import Landing from "./Components/Landing";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminSignUp from './Components/AdminSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHomePage from './Components/AdminHomePage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminAddProduct from './Components/AdminAddProduct';



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
        <Route path='/adminaddproduct' element={<AdminAddProduct/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
      
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
