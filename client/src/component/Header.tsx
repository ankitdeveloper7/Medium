// import { CiSearch } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { storiesAtom, userBlogAtom } from "../store/atom";
import { API_URL } from "../API_URL";
import axios from "axios";
import { Avatar } from "./Avatar";

export const Header = () => {
    const [option, setoption] = useState(false);
    
    const setblog = useSetRecoilState(userBlogAtom);
    const stories = useSetRecoilState(storiesAtom)
    function openBlogEditor() {
        { window.open("/writeblog", "_self") }
    }
    function logout() {
        return (
            <>
                {localStorage.removeItem("token")}
                {window.open("/", "_self")}
            </>
        )
    }



    async function openStories() {

        const response = await axios.get(`${API_URL}/api/v1/blog`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        const data = response.data;
        console.log("this is user data", data)
        setblog(data);
        stories(true);
        setoption(false);
    }

    return (
        <>
            <section className=" border-b-1 border-slate-100">
                <div className="relative max-w-8xl mx-8 px-8 py-4 align-bottom">
                    <div className="inline-block align-bottom">
                        <a className="inline-block text-4xl font-serif font-semibold align-baseline" href="/mainpage">Medium</a>
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
                            <button className="cursor-pointer" onClick={() => setoption(!option)}> 
                                {/* <FaRegUserCircle className="inline-block" size={38} />  */}
                                <Avatar />
                                </button>
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