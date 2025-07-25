import { useEffect, useState } from "react";
import { Calculatedate } from "./Ccalutedate";
import { CiMenuKebab } from "react-icons/ci";
import LetterAvatars from "./Avatar";

interface Props {
  id: number;
  username: string;
  heading: string;
  content: string;
  imagelink: string;
  date: string;
  userdetails: boolean;
  deleteblog: () => void;
}

export const BlogDisplay = ({
  id,
  username,
  heading,
  content,
  imagelink,
  date,
  userdetails,
  deleteblog,
}: Props) => {
  const [createddate, setdate] = useState("");
  const [option, setoption] = useState(false);
  // const blogedit = useSetRecoilState(blogeditAtom);
  // const editstatus = useSetRecoilState(blogeditstatusAtom);
  const renderData = (htmlContent: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  useEffect(() => {
    const data = Calculatedate(date);
    setdate(data);
  }, [date]);

  function blogOpen() {
    return <>{window.open(`/blog/${id}`, "_self")}</>;
  }

  function updateblog() {
    localStorage.setItem("blogid", String(id));
    localStorage.setItem("updatestatus", "true");
    setoption(false);
    window.open("/writeblog", "_self");
  }
  function blogdelete() {
    setoption(false);
    deleteblog();
  }
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="max-w-3xl w-full grid grid-cols-4 border-b border-slate-200 py-8">
          <div className="col-span-3">
            <div className="flex items-center gap-2">
              <LetterAvatars username={username} size={26} />
              <div className="text-sm font-[400] text-[#242424]">
                {username}
              </div>
            </div>

            <div
              className="text-xl md:text-2xl text-[#242424] font-[700] cursor-pointer py-1"
              onClick={blogOpen}
            >
              {heading}
            </div>

            <div className="truncate text-md font-medium text-slate-400 pb-2">
              {renderData(content.slice(0, 100))}
            </div>

            <div className="font-[400] text-sm text-[#6b6b6b] cursor-pointer">
              {createddate}
            </div>
          </div>

          <div className="ml-4 relative">
            {!userdetails && <img className="cursor-pointer" src={imagelink} />}
            {userdetails && (
              <button
                className="cursor-pointer absolute right-4"
                onClick={() => setoption(!option)}
              >
                <CiMenuKebab size={24} />
              </button>
            )}

            {option && (
              <div className="w-42 border border-gray-300 shadow-lg absolute right-[-10px] top-12 bg-white z-50 rounded-md">
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={updateblog}
                >
                  Edit Blog
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={blogdelete}
                >
                  Delete Blog
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
