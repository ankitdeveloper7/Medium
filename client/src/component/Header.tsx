// import { CiSearch } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () =>{
    function openBlogEditor(){
        {window.open("/writeblog", "_self")}
    }
    return(
        <>
            <section className=" border-b-1 border-slate-100">
           <div className="relative max-w-8xl mx-8 px-8 py-4 align-bottom">
           <div className="inline-block align-bottom">
            <div className="inline-block text-4xl font-serif font-semibold align-baseline">Medium</div>
            {/* <div className="inline-block relative rounded-full bg-slate-100 py-1 ml-4 align-baseline"> */}
                {/* <span className="inline-block absloute top-1/2">
                    <CiSearch />
                </span> */}
                <input
                    className="text-[14px] h-[42px] w-64 text-black font-serif outline-none inline-block text-[14px] rounded-full bg-[#f9f9f9] py-1 ml-4 align-baseline px-4"
                type="text"
                placeholder="Search"
                id="search"
                />
            {/* </div> */}
            </div>
            <div className=" inline-block align-bottom absolute right-8">
                <div className="inline-block cursor-pointer text-400 text-[#6b6b6b] ">
                <SlNote className="inline-block align-center" size={25} /> 
                <button className="mr-8 ml-2 align-center font-serif cursor-pointer" onClick={openBlogEditor}>Write</button>
                    </div>
               
                <button> <FaRegUserCircle className="inline-block" size={38}/> </button>
           </div>
           </div>
        </section>
       
       
        </>
    )
}