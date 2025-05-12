import { useEffect, useState } from "react";
import { API_URL } from "../API_URL";
import axios from "axios";


export const useBlog = () => {
    const[loading, setLoading] = useState(true);
   const[allblog, getallBlog] = useState([]);
   
       useEffect(()=>{
           async function getdata(){
               const response = await axios.get(`${API_URL}/api/v1/blogbulk`,{
                   headers:{
                       Authorization:localStorage.getItem("token")
                   }
               });
               getallBlog(response.data);
               setLoading(false);
           };
           getdata();
       })
    return{
       loading,
       allblog
    }
}