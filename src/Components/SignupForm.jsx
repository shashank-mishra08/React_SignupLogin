import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setisLoggedin}) => {
    // if creating form we have to make sure that we create useState to store things and relfect changes
    const[formData,setformData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        createpassword:"",
        confirmpassword:""
    });

    // dashboard pe navigate krne ke liye 
    const navigate = useNavigate();

    // now we have to create function for handling changes
    function changeHandler(event){
        setformData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }

    // ab ek function banana hai which will show password when clicked
    const[showPassword,setShowPassword]=useState(false)
    const[accountType, setAccountType] = useState("student")

    // form ka submit Handler banana hai
    function submitHandler(e){
        e.preventDefault();
        if (formData.createpassword !== formData.confirmpassword) {
            toast.error('password do not match');
            return;
        }
        // jab sab sahi daal doge user ka account ban jayega and user loogedin ho jayega
        setisLoggedin(true);
        toast.success('Account Created');
        const accountData = {
            ...formData,
          };

          const finalData ={
            ...accountData,
            accountType
          }
          console.log("account Data signupform ka")
          console.log(accountData);
      
          navigate("/dashboard");

    }
    






  return (
    <div>
        {/* student and instructor tab */}
        <div className='flex gap-x-3 text-cyan-200 border rounded-4xl w-max px-6 py-2 mt-3'>
            <button className={`${accountType === "student" ? " bg-gray-600 text-yellow-100" : "bg-transparent text-yellow-100"} py-2 px-5 rounded-full transition-all` } onClick={()=>setAccountType("student")}>Student</button>
            <button className={`${accountType ==="instructor" ? "bg-gray-600 text-yellow-100" : "bg-transparent text-yellow-100"} py-2 px-5 rounded-full transition-all`} onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>
        {/* now  i have to create a form that will have - first name,last name,email, createpassword, confirmpassword
        and a create Account button and ---or---, and a button which has written sign in with google */}
        <form onSubmit={submitHandler}>
            <div className='flex gap-x-3 justify-between'>
            <label>
                <p className='text-[1rem] leading-[1.375rem] mb-3 mt-3 text-white'>First Name <sup className='text-pink-600'> *</sup> </p>
                <input
                    className='w-full max-w-md px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border
                     border-white/20 focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-300 shadow-lg" />'
                    required
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    placeholder='Enter Your First Name'
                    onChange={changeHandler}
                 

                />
            </label>

            <label>
                <p className='text-[1rem] leading-[1.375rem] mb-3 mt-3 text-white'>Last Name <sup className='text-pink-600'>*</sup></p>
                <input
                    className='w-full max-w-md px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border
                     border-white/20 focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-300 shadow-lg" />'
                    required
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    placeholder='Enter your Last Name'
                    onChange={changeHandler}
          
                />
            </label>
            </div>

            <label>
                <p className='text-[1rem] leading-[1.375rem] mb-3 mt-3 text-white'> Email Adderess <sup className='text-pink-600'>*</sup></p>
                <input
                    className='w-full max-w-md px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border
                     border-white/20 focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-300 shadow-lg" />'
                     required
                    type='email'
                    name='email'
                    value={formData.email}
                    placeholder='Enter Your Email Address'
                    onChange={changeHandler}
                    autoComplete='give-email'
                />
            </label>

            {/* ab create password and confirm password wali banani h */}

            <div className='flex justify-between  gap-x-3 w-full'>
            <label>
                <p className='text-[1rem] leading-[1.375rem] mb-3 mt-3 text-white'> Create Password <sup className='text-pink-600'>*</sup></p>
                <input
                    className='w-full max-w-md px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border
                     border-white/20 focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-300 shadow-lg" />'
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='createpassword'
                    value={formData.createpassword}
                    placeholder='Enter your Password '
                    onChange={changeHandler}
                />
            </label>

            <label>
                <p className='text-[1rem] leading-[1.375rem] mb-3 text-white  mt-3'>Confirm Password <sup className='text-pink-600'>*</sup></p>
                <input
                    className='w-full max-w-md px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border
                     border-white/20 focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-300 shadow-lg" />'
                    required
                    type='password'
                    name='confirmpassword'
                    value={formData.confirmpassword}
                    placeholder='Enter your Password'
                    onChange={changeHandler}
                />
            </label>
            </div>

            {/* create Account wala button */}
            <button className='className="border rounded-2xl py-2 px-4 w-11/12 mt-4 mb-4 mx-auto flex justify-center items-center 
              hover:scale-110 transition duration-300 hover:bg-blue-300  text-amber-200 border-4 border-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-border"'  > Create Account</button>


            

            
        </form>
        <ToastContainer/>
   
    </div>
  )
}

export default SignupForm