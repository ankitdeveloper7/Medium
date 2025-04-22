import Signup from "./Signup"
import { Quotes } from "../component/Quotes"
import { useRecoilValue } from "recoil"
import { authvalueAtom } from "../store/atom"
import { useEffect, useState } from "react"
import Signin from "./Signin"

export const Auth = ()=>{
    const authvalue = useRecoilValue(authvalueAtom);
    const[login, setLogin] = useState(false);

    useEffect(()=>{
       if(authvalue==="login"){
        setLogin(true);
       }else{
        setLogin(false);
       }
    },[authvalue])
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2">
         <div>
         {login?<Signin /> : <Signup />}
         </div>
         <div className="hidden md:contents">
          <Quotes />
         </div>
        </div>
        </>
    )
}