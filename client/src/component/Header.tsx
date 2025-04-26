// import { CiSearch } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

export const Header = () =>{
    const[option, setoption] = useState(false);
    function openBlogEditor(){
        {window.open("/writeblog", "_self")}
    }
    function logout(){
        return(
            <>
            {localStorage.removeItem("token")}
            {window.open("/", "_self")}
            </>
        )
    }

    function openStories(){
        return(
            <>
            {window.open("/stories", "_self")}
            </>
        )
    }

    return(
        <>
            <section className=" border-b-1 border-slate-100">
           <div className="relative max-w-8xl mx-8 px-8 py-4 align-bottom">
           <div className="inline-block align-bottom">
            <div className="inline-block text-4xl font-serif font-semibold align-baseline">Medium</div>
                <input
                    className="text-[14px] h-[42px] w-64 text-black font-serif outline-none inline-block text-[14px] rounded-full bg-[#f9f9f9] py-1 ml-4 align-baseline px-4"
                type="text"
                placeholder="Search"
                id="search"
                />
            </div>
            <div className=" inline-block align-bottom absolute right-8">
                <div className="inline-block cursor-pointer text-400 text-[#6b6b6b] ">
                <SlNote className="inline-block align-center" size={25} /> 
                <button className="mr-8 ml-2 align-center font-serif cursor-pointer" onClick={openBlogEditor}>Write</button>
                    </div>
               
               <div className="relative inline-block">
               <button className="cursor-pointer" onClick={()=>setoption(!option)}> <FaRegUserCircle className="inline-block" size={38}/> </button>
               {option && (
                      <div className="w-42 border border-gray-300 shadow-lg absolute right-[-10px] top-12 bg-white z-50 rounded-md">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={openStories}>Stories</div>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={logout}>Logout</div>
                      </div>
                      )}
               </div>
           </div>
           </div>
        </section>
       
       
        </>
    )
}