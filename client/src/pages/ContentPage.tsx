import { useRecoilValue } from "recoil";
import { BlogDisplay } from "../component/BlogDisplay";
import { SideBlog } from "../component/SideBlog";
import { useBlog } from "./useBlog";
import 'react-loading-skeleton/dist/skeleton.css'
import { storiesAtom, userBlogAtom } from "../store/atom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../API_URL";



export const ContentPage = () => {
    const {loading, allblog } = useBlog();
    const[blog,setblog] = useState([]);
    const validuser = useRecoilValue(storiesAtom);
    const userStories = useRecoilValue(userBlogAtom);
    const[userblog, setuserblog] = useState([]);

    useEffect(()=>{
     setuserblog(userStories);
    },[userStories])


    useEffect(()=>{
     setblog(allblog);
    },[allblog])

if(loading){
   return(
    <>
    <div>Loading.....</div>
    </>
   )
}
async function handleclickdelete(id:any){
    try {
        setuserblog(deleteblg => deleteblg.filter((item:any)=>(
            item.id !==id
        )));
        console.log("this is the value of the blog");

        const response = await axios.delete(`${API_URL}/api/v1/deleteblog`, {
            data:{
                id:id
            }, headers:{
                Authorization:localStorage.getItem("token")
            }
        });
        console.log(response.data)

    } catch (error) {
        console.log("some invalid error has occured")
        
    }
}
    return (
        <>
            <section className="mx-8">
                <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
                    <div className="col-span-3">
                        {validuser?
                        <div className="space y-8">
                        {userblog.map((item: any) => (
                            <>
                            <BlogDisplay id={item.id} username={item.author.name} heading={item.title} content={item.content} imagelink={item.imagelink} date={item.createdAT} userdetails={validuser} deleteblog={()=>handleclickdelete(item.id)} />
                            </>
                        ))}
                    </div>
                        :
                        <div className="space y-8">
                            {blog.map((item: any) => (
                                <BlogDisplay id={item.id} username={item.author.name} heading={item.title} content={item.content} imagelink={item.imagelink} date={item.createdAT} userdetails={validuser} deleteblog={()=>handleclickdelete(item.id)} />
                            ))}
                        </div>}
                    </div>
                    <div className="min-h-screen border-l-1 border-slate-200">
                        <div className="p-6 sticky top-4">
                            <div className="font-semibold text-400 text-base">
                                Staff Picks
                            </div>
                            {blog.slice(0, 4).map((item: any) => (
                                <SideBlog username={item.author.name} heading={item.title} date="just now" />
                            ))}

                            <div>
                                <div className="text-[#242424] font-[500] text-lg my-2">
                                Recommended topics
                                </div>
                                <div>
                                    <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">Data Science</button>
                                    <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">Productivity</button>
                                    <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">Cryptocurrency</button>
                                    <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">Machine Learning</button>
                                    <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">Money</button>
                                    <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">Politics</button>
                                    
                                    
                                    
                                    </div>
                            </div>
                            <div>
                           <div className="text-red-800 text-lg my-2">
                           Get the latest articles every week.
                           </div>
                           <div>
                            <input type="text" placeholder="enter your email address" className="p-1 border-2 mr-1 min-w-64"/>
                            <button className="p-1 border-2 text-white bg-red-600 px-3 cursor-pointer">Subscribe</button>
                           </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}