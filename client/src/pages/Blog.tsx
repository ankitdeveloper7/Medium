import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { API_URL } from "../API_URL";
import { Header } from "../component/Header";
import { Calculatedate } from "../component/Ccalutedate";
import { Footer } from "../component/Footer";
import LetterAvatars from "../component/Avatar";
import CircularColor from "../component/Loading";

export default function Blog() {
  const [blog, setBlog] = useState({
    title: "",
    createdAT: "",
    author: {
      name: "",
    },
    imagelink: "",
    content: "",
  });
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const { id } = useParams();

  const [date, getDate] = useState("");
  useEffect(() => {
    const data = Calculatedate(blog.createdAT);
    getDate(data);
  }, [blog]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${API_URL}/api/v1/blogdetails/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        console.log(response.data);
        setBlog(response.data);
        setLoading(false);
        console.log("got the data", blog);
      } catch (error) {
        console.error("Some error has occured", error);
      }
    }

    getData();
  }, [id]);

  const renderData = (htmlContent: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <>
      <Header />
      {loading ? (
        <div>
          <CircularColor />
        </div>
      ) : (
        <div className="flex justify-center py-6">
          <div className="max-w-3xl mx-5 ">
            <div className="text-3xl font-[700] py-4 md:text-[48px]">
              {blog.title}{" "}
            </div>
            <div>
              <div className="inline-block pr-1">
                <LetterAvatars username={blog.author.name} size={26} />
              </div>
              {blog.author.name} &#x2022; {date}
            </div>
            <div className="py-4 w-full h-auto">
              <img src={blog.imagelink} />{" "}
            </div>
            <div className="text-lg sm:text-xl sourceSerif font-[400] text-justify">
              {renderData(blog.content)}
            </div>
          </div>
        </div>
      )}
      <div className="border-t-1 border-slate-200">
        <Footer />
      </div>
    </>
  );
}
