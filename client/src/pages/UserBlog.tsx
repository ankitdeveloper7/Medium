import { useEffect, useState } from "react"
import { Footer } from "../component/Footer"
import { Header } from "../component/Header";
import { API_URL } from "../API_URL";
import axios from "axios";
import { BlogDisplay } from "../component/BlogDisplay";

export const Stories = () =>{
    const[userblog, getUserblog] = useState([]);

    

    return(
        <>
        <Header />
        <div>
            {/* {userblog.map((item:any)=>(
                <>
                 <div className="max-w-3xl">
                 <BlogDisplay id={item.id} heading={item.title} content={item.content} imagelink={item.imagelink} date={item.createdAT} username={""} />
                 <button>Update</button>
                 <button>Delete</button>
                 </div>
                </>
                
            ))} */}
            <p>this is main stories</p>
        </div>
        <Footer />
        </>
    )
}