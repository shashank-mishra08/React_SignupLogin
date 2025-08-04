import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frame from '../assets/frame.png';
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formType, setisLoggedin}) => {
  
    
  return (
    <div className='flex w-11/12 justify-between mx-auto max-w-[1160px] py-24 gap-x-12 gap-y-0'>


        <div className=' w-11/12  max-w-[450px] mx-0'>
         <h1 className='text-richblack-5 font-semibold text-[1.5rem] leading-[2.375rem] text-amber-100'>{title}</h1> 


         <p className='text-[1.125rem] leading-[1.625rem] mt-4 '> 
            <span className='text-richblack-100 text-stone-50'>{desc1}</span>
            <br/> 
            <span className='text-blue-600 italic'>{desc2}</span>
         </p>  


         {/* upar template me ki gayi prepared chij ya to singupForm ke upar aayega ya LoginForm aayega */}
         {formType=== "Signup" ? (<SignupForm setisLoggedin={setisLoggedin}/>):(<LoginForm setisLoggedin={setisLoggedin}/>)}

         {/* line fir or ke baad fir ek line ke liye div use karna hai */}

         <div className='flex w-full items-center my-2 gap-x-2'>
            <div className='bg-green-400 h-[3px] w-full' ></div>
            <p className='font-medium italic leading-1.5 text-richblack-700 text-white' >or</p>
            <div className='bg-green-400 h-[3px] w-full'></div>
         </div>

         <button className='flex w-full items-center justify-center gap-x-3 rounded-2xl font-serif border mt-10 px-[12px] py-[8px] text-amber-100'> <FcGoogle/> Sign in with google</button>

         
        </div>

        {/* Now we will create a div for image */}
        <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="here is your frame"
          width={558}
          height={504}
          loading="lazy"

        />
        <img
          src={image}
          alt="here is your image"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />


      </div>

    
    </div>
  )
}

export default Template;