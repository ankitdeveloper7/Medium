// import React from 'react'
import { Link } from 'react-router-dom';
import { GoogleLoginButton} from '../component/GoogleLoginButton';
import { useSetRecoilState } from 'recoil';
import { authvalueAtom } from '../store/atom';
import { API_URL } from '../API_URL';
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


export default function Signin() {
  const[email, setEmail] = useState("");
  const[password, getPassword] = useState("");
  const[token, setToken] = useState("");
  

  function handlesignup(){
    alert("successfu signed up")
  }
  async function onPress(e:any){
    toast.loading('please wait signing in ...', {
      position: 'bottom-left',
    })
    e.preventDefault();
     const response = await axios.post(`${API_URL}/api/v1/user/signin`, {
      email:email,
      password:password
     },
     {
      headers:{
        "Content-Type":"application/json"
       }
     }
     
    );
   
    const data = response.data;
    localStorage.setItem("token",data);
    console.log(data);
    setToken(data);
  }
  const setAuth= useSetRecoilState(authvalueAtom) || "";
  console.log("this is the value of token",token)
  if(token){
    return(
      <>
      {window.open("/mainpage","_self")}
      </>
    )
  }
  return (
   <>
    <div className='h-screen flex justify-center flex-col'>
      <div className=''>
        <form className="max-w-sm mx-auto">
          <div className='text-slate-400 text-center'>Don't have an account? <Link className='underline pl-1' to="#" onClick={()=>setAuth("signup")}>Create</Link> </div>
          <div className='w-full font-medium my-4'>
          <GoogleLoginButton onloginSuccess={handlesignup} />
          </div>
          <div className='text-center text-slate-400'>
           -------- OR continue with ----------
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input type="email" id="email" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required onChange={(e)=>getPassword(e.target.value)} />
          </div>
<div className='flex justify-center'>
          <button type="submit" className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center cursor-pointer" onClick={onPress}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer />
   </>
  )
}
