import { useRecoilValue } from "recoil";
import { BlogDisplay } from "../component/BlogDisplay";
import { SideBlog } from "../component/SideBlog";
import "react-loading-skeleton/dist/skeleton.css";
import { storiesAtom, userBlogAtom, usernameAtom } from "../store/atom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../API_URL";

export const ContentPage = () => {
  const [loading, setLoading] = useState(true);
  // const[blog]
  // const {loading, allblog } = useBlog();
  const [blog, getBlog] = useState([]);
  const validuser = useRecoilValue(storiesAtom);
  const userStories = useRecoilValue(userBlogAtom);
  const [userblog, setuserblog] = useState([]);
  const username = useRecoilValue(usernameAtom);
  console.log("this is the value of username", username);
  useEffect(() => {
    setuserblog(userStories);
  }, [userStories]);

  useEffect(() => {
    async function getdata() {
      const response = await axios.get(`${API_URL}/api/v1/blogbulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      getBlog(response.data);
      setLoading(false);
      console.log("this is just called once");
    }
    getdata();
  }, []);

  if (loading) {
    return (
      <>
        <div>Loading.....</div>
      </>
    );
  }
  async function handleclickdelete(id: any) {
    try {
      setuserblog((deleteblg) =>
        deleteblg.filter((item: any) => item.id !== id)
      );
      console.log("this is the value of the blog");

      const response = await axios.delete(`${API_URL}/api/v1/deleteblog`, {
        data: {
          id: id,
        },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log("some invalid error has occured");
    }
  }
  return (
    <>
      <section className="mx-8">
        <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
          <div className="col-span-3">
            {validuser ? (
              <div className="space y-8">
                {userblog.map((item: any) => (
                  <>
                    <BlogDisplay
                      id={item.id}
                      username={item.author.name}
                      heading={item.title}
                      content={item.content}
                      imagelink={item.imagelink}
                      date={item.createdAT}
                      userdetails={validuser}
                      deleteblog={() => handleclickdelete(item.id)}
                    />
                  </>
                ))}
              </div>
            ) : (
              <div className="space y-8">
                {blog.map((item: any) => (
                  <BlogDisplay
                    id={item.id}
                    username={item.author.name}
                    heading={item.title}
                    content={item.content}
                    imagelink={item.imagelink}
                    date={item.createdAT}
                    userdetails={validuser}
                    deleteblog={() => handleclickdelete(item.id)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="min-h-screen md:border-l-1 border-slate-200">
            <div className="p-6 sticky top-4">
              <div className="font-semibold text-400 text-base">
                Staff Picks
              </div>
              {blog.slice(0, 4).map((item: any) => (
                <SideBlog
                  username={item.author.name}
                  heading={item.title}
                  date={item.createdAT}
                />
              ))}

              <div>
                <div className="text-[#242424] font-[500] text-lg my-2">
                  Recommended topics
                </div>
                <div>
                  <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">
                    Data Science
                  </button>
                  <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">
                    Productivity
                  </button>
                  <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">
                    Cryptocurrency
                  </button>
                  <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">
                    Politics
                  </button>
                  <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">
                    Machine Learning
                  </button>
                  <button className="rounded-full px-4 py-2 m-2 bg-[#f2f2f2] text-[#242424] text-base font-normal cursor-pointer">
                    Money
                  </button>
                </div>
              </div>
              {/* <div>
                <div className="text-red-800 text-lg my-2">
                  Get the latest articles every week.
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="enter your email address"
                    className="p-1 border-2 mr-1 min-w-64"
                  />
                  <button className="p-1 border-2 text-white bg-red-600 px-3 cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
