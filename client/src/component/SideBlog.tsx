import LetterAvatars from "./Avatar";

interface Props {
  username: string;
  heading: string;
  date: string;
}
export const SideBlog = ({ username, heading, date }: Props) => {
  return (
    <>
      <div className="flex justify-center py-4">
        <div className="max-w-full">
          <div>
            <div className="inline-block pr-2">
              <LetterAvatars username={username} />
            </div>
            <div className="text-sm font-[400] text-[#242424] inline-block">
              {username}
            </div>
          </div>
          <div className="text-lg  text-[#242424] font-[700] cursor-pointer py-2">
            {heading}
          </div>
          <div className="font-[400] text-sm text-[#6b6b6b] cursor-pointer">
            {date}
          </div>
        </div>
      </div>
    </>
  );
};
