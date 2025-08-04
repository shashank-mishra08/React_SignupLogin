import React from 'react'
import SignupnImg from '../assets/signup.png'
import Template from './Template'

const Signup = ({setisLoggedin}) => {
  console.log("signup");
  
  return (
    <div>
         <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={SignupnImg}
      formType="Signup"
      setisLoggedin={setisLoggedin}
    />
    </div>
  )
}

export default Signup