import { useEffect, useState } from "react";
import { API_URL } from "../API_URL";
import axios from "axios";


export const useBlog = () => {
    const[loading, setLoading] = useState(true);
   const[blog, getBlog] = useState([]);
   
       useEffect(()=>{
           async function getdata(){
               const response = await axios.get(`${API_URL}/api/v1/blogbulk`,{
                   headers:{
                       Authorization:localStorage.getItem("token")
                   }
               });
               getBlog(response.data);
               setLoading(false);
           };
           getdata();
       })
    return{
       loading,
       blog
    }
}