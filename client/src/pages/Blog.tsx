import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { API_URL } from "../API_URL";
import { Header } from "../component/Header";
import { Calculatedate } from "../component/Ccalutedate";



export default function Blog() {
  const [blog, setBlog] = useState({

    title: "",
    createdAT: "",
    author:{
      name:""
    },
    imagelink: "",
    content: ""
  });
  
  const { id } = useParams();

  const [date, getDate] = useState("");
  useEffect(() => {
    const data = Calculatedate(blog.createdAT);
    getDate(data);
  }, [blog]);

  

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${API_URL}/api/v1/blogdetails/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        console.log(response.data)
        setBlog(response.data);
        console.log("got the data", blog)
      } catch (error) {
        console.error("Some error has occured", error)
      }

    };

    getData();
  }, [id]);

  const renderData = (htmlContent: string) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  };

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="max-w-[680px]">
          <div className="text-4xl font-[700] py-4 md:text-[48px]">{blog.title} </div>
          <div> <img className="inline-block size-10 rounded-full ring-2 ring-white mr-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/> {blog.author.name} &#x2022; {date}</div>
          <div className="py-4 w-full h-auto"><img src={blog.imagelink} /> </div>
          <div className="text-lg sm:text-xl sourceSerif font-[400] text-justify">{renderData(blog.content)}</div>

        </div>
      </div>
    </>
  )
}
