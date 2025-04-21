import React from 'react';
import { Quotes } from '../component/Quotes';
import { GoogleLoginButton,Googleuser } from '../component/GoogleLoginButton';



export default function Signin() {
  
  function handlesuccess(user:Googleuser){
    alert(user);
  }

  return (
    <div className='inline-block'>
   <GoogleLoginButton onloginSuccess={handlesuccess} />


   </div>
  
  
  )
}
