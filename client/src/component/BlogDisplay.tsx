import { useEffect, useState } from "react";
import { Calculatedate } from "./Ccalutedate";
interface Props {
    id:number;
    username: string;
    heading: string;
    content:string;
    imagelink:string;
    date: string
}
export const BlogDisplay = ({id, username, heading,content, imagelink, date }: Props) => {
    const[createddate, setdate] = useState("");
    const renderData = (htmlContent: string) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        );
      };

      useEffect(()=>{
        console.log("this is the value of date", date)
        const data = Calculatedate(date);
        setdate(data);
      },[date])

      function blogOpen(){

        return(
            <>
            {window.open(`/blog/${id}`, "_self")}
           
            </>
        )
      }
    return (
        <>
            <div className="flex justify-center">

                <div className="max-w-3xl grid grid-cols-4 border-b-1 border-slate-200 py-8">
                    <div className="col-span-3">
                        <div className="text-sm font-[400] text-[#242424]">
                            <img className="inline-block size-6 rounded-full ring-2 ring-white mr-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                            {username}
                        </div>
                        <div className="text-xl md:text-3xl max-w-xl text-[#242424] font-[700] cursor-pointer py-1" onClick={blogOpen}>
                            {heading}
                        </div>
                        <div className="truncate text-lg font-medium text-slate-400 pb-2">
                       {renderData(content.slice(0,100))}
                        </div>
                        <div className="font-[400] text-sm text-[#6b6b6b] cursor-pointer">
                            {createddate}
                        </div>
                    </div>
                    <div className="ml-4">
                        <img className="cursor-pointer" src={imagelink} />
                    </div>
                   
                </div>
                
            </div>


        </>
    )
}