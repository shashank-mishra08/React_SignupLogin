import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({setisLoggedin}) => {

    // navigate ka use karenge sign in karne ke baad dashboard pe jaane ke liye
    const navigate = useNavigate();

    const showToast = () => {
        toast.success('logged in succesfully', {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      };
 
    // password ka show hoga ya nahi hoga uske liye 
    const[showPassword, setShowPassword]=useState(false);



    const[formData,setformData]=useState(
       {
        email:"",
        password:"",
       }
    )

    function changeHandler(event){
       setformData((prevData)=>(
        {
            ...prevData,
            [event.target.name]:[event.target.value]
        }
       ))
    }

    // ab submit handler ka ek function banana hai

    function submitHandler(event){
        event.preventDefault();
        setisLoggedin(true);
        toast.success('logged in ');
        console.log("printing the loginform data")
        console.log(formData);
        navigate("/dashboard"); 



        // sign in ho jaye to aapko dashboard pe v jaana hoga to uske liye ham use karenge navigate ka
        
     
    }

  return (
    <div className='flex flex-col w-full gap-y-4'>
        <form  onSubmit={submitHandler}  className='flex flex-col w-full gap-y-4 mt-6  ' >

                {/* THIS IS EMAIL ADDRESS KA INPUT FIELD */}

            <label className='w-full'>
                <p className='text-[1rem] leading-[1.375rem] mb-3 text-amber-100 '> Email Address <sup className='text-pink-600'>*</sup> </p>
                <input
                    className='w-full max-w-md px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border
                     border-white/20 focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-300 shadow-lg" />'
                    type='email'
                    placeholder='Enter Your Email Adderess'
                    value={formData.email}
                    name='email'
                    onChange={changeHandler}
                    autoComplete='give-email'
                />
            </label>

            {/* password wala input field */}
            <label >
                <p className='text-[1rem] leading-[1.375rem] mb-3 text-amber-100'>Password <sup className='text-pink-600' >*</sup> </p>
                <input
                className='w-full max-w-md px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border
                 border-white/20 focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-300 shadow-lg" />'
                required
                type={showPassword ? ("text"): ("password")}
                name='password'
                value={formData.password}
                placeholder='Enter Your Password'
                onChange={changeHandler}

            />

             {/* ab eye and corss eye icons are used and when it is used when it is corssed the password is not visible
            and wnen it is uncrossed the password is visible  */}
            {/* <span>
                {showPassword ? () : ()}
            </span> */}

            <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto  '>forgot password</p>

            </Link>
 
            </label>

           

            {/* now creating sign in button */}
            <button onClick={showToast} className='border max-w-full rounded-2xl pt-1.5 pb-1.5 bg-sky-200 ring-blue-300 cursor-pointer font-medium '> Sign in</button>

        </form>
    </div>
  )
}

export default LoginForm;