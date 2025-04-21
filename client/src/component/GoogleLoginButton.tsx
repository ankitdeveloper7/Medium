import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
export interface Googleuser{
    name:string;
    email:string;
    picture:string;
    sub:string
}
interface Props {
    onloginSuccess: (user: Googleuser) => void;
  }

export const GoogleLoginButton: React.FC<Props> = ({onloginSuccess}) =>{

    const handleSuccess = (crendentailresponse:CredentialResponse) =>{
        if(crendentailresponse.credential){
            const decoded:Googleuser = jwtDecode(crendentailresponse.credential);
            console.log(decoded);
            onloginSuccess(decoded);
            localStorage.setItem('user', JSON.stringify(decoded));
        }
    }

    function errorHandler(){
        alert("Failed to sign in")
    }

    return(
        <>
        <GoogleLogin
        onSuccess={handleSuccess}
        onError={errorHandler}
         />

        </>
    )
}