// import React from 'react'
import { Link } from 'react-router-dom';
import { GoogleLoginButton} from '../component/GoogleLoginButton';
import { useSetRecoilState } from 'recoil';
import { authvalueAtom } from '../store/atom';

export default function Signup() {
  function handlesignup(){
  alert("successful signed up")
  }

  const setAuth= useSetRecoilState(authvalueAtom) || "";
  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className=''>
        <form className="max-w-sm mx-auto">
          <div className='text-3xl font-semibold text-center'>Create an account</div>
          <div className='text-slate-400 text-center'>Already have an account? <Link className='underline pl-1' to="" onClick={()=>setAuth("login")}>Login</Link> </div>
          <div className='w-full font-medium my-4'>
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
          <button type="submit" className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center cursor-pointer">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
