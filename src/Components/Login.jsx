import React from 'react'
import Template from './Template'
import loginImage from '../assets/login.png'

const Login = ({setisLoggedin}) => {
  console.log('hellow shashank')
  return (
    <div>
         <Template
     
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImage}
      formType="login"
      setisLoggedin={setisLoggedin}
    />

    </div>
    
  )
}

export default Login