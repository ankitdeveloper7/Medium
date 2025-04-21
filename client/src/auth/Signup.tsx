// import React from 'react'
import { Link } from 'react-router-dom';
import { GoogleLoginButton} from '../component/GoogleLoginButton';

export default function Signup() {
  function handlesignup(){
  alert("successful signed up")
  }
  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className=''>
        <form className="max-w-sm mx-auto">
          <div className='text-3xl font-semibold'>Create an account</div>
          <div className='text-slate-400'>Already have an account? <Link className='underline pl-1' to="#">Login</Link> </div>
          <div className='font-medium my-4'>
          <GoogleLoginButton onloginSuccess={handlesignup} />
          </div>
          <div className='text-center text-slate-400'>
           -------- OR continue with ----------
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Username</label>
            <input type="text" id="username" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your username" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input type="email" id="email" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
<div className='flex justify-center'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
