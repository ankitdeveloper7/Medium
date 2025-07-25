import { useEffect, useState } from "react";
import LetterAvatars from "./Avatar";
import { Calculatedate } from "./Ccalutedate";

interface Props {
  username: string;
  heading: string;
  date: string;
}
export const SideBlog = ({ username, heading, date }: Props) => {
  const [createddate, setdate] = useState("");

  useEffect(() => {
    const data = Calculatedate(date);
    setdate(data);
  }, [date]);

  return (
    <>
      <div className="flex justify-center py-4 w-full">
        <div className="w-full">
          <div>
            <div className="inline-block pr-1">
              <LetterAvatars username={username} size={26} />
            </div>
            <div className="text-sm font-[400] text-[#242424] inline-block">
              {username}
            </div>
          </div>
          <div className="text-lg  text-[#242424] font-[700] cursor-pointer py-2">
            {heading}
          </div>
          <div className="font-[400] text-sm text-[#6b6b6b] cursor-pointer">
            {createddate}
          </div>
        </div>
      </div>
    </>
  );
};
