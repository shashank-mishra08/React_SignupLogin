import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg" 
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const Navbar = (props) => {
    let isLoggedin=props.isLoggedin;
    let setisLoggedin=props.setisLoggedin;
  return (
    <div className='flex justify-evenly items-center w-11/12 mx-auto max-w-[1160px] py-6 '>
        <Link to="/">
         <img src={logo} alt='logo' loading='lazy'/>
         
        </Link>

        <nav>
            <ul className='flex gap-3 text-white  gap-x-6 '>
               
               <li>
                <Link to="/">Home</Link>
               </li>
               <li>
                <Link to="/">About</Link>
               </li>
               <li>
                <Link to="/">Contact</Link>
               </li>
            </ul>
        </nav>
        {/* ab buttons banani hai like 
        login ka, signup ka, dashboard, and logout ka */}
        {/* user login hai ya nahi isko ham define kar lenge aap.jsx me using usestate() and props ka use karke parent se child me data share kr lenge */}
            <div className='flex items-center gap-x-7'>
                { !isLoggedin &&
                    <Link to="/login">
                        <button id='shashank'>Login</button>
                    </Link>
                }

                { !isLoggedin &&
                    <Link to="/signup">
                        <button id='shashank'>Signup</button>
                    </Link>
                }


                { isLoggedin &&
                    <Link to="/">
                        <button id='shashank' onClick={()=>{
                            setisLoggedin(false)
                            toast.success("logged out successfully")
                        }}>Logout</button>
                    </Link>
                }


                { isLoggedin &&
                    <Link to="/dashboard">
                        <button id='shashank'>Dashboard</button>
                    </Link>
                }


            </div>

           
    </div>
  )
}

export default Navbar