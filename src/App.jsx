import './App.css'
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute.jsx';


function App() {
  
  const[isLoggedin, setisLoggedin]=useState(false); // login nahi hai therfore initially flase pass karenge
  // ab navbar me is state variable ko use karenge taki isko use use kar paye


  return (
    <div className=' w-screen h-screen flex flex-col bg-gray-900'>
      <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}/>
      <Routes>
        <Route path="/" element={<Home isLoggedin={isLoggedin}/>}/>
        <Route path="/login" element={<Login setisLoggedin={setisLoggedin}  />}/>
        <Route path="/signup" element={<Signup setisLoggedin={setisLoggedin}/>}/>
        <Route path="/dashboard" element={
                                          <PrivateRoute isLoggedin={isLoggedin}>
                                                       <Dashboard/>
                                           </PrivateRoute>   
        }/>
        {/* Dashboard pe bina login kiye nahi bhejna user ko therefore privateroute ka use krna hoga */}
        
      </Routes>
 
    </div>
  )
}

export default App
