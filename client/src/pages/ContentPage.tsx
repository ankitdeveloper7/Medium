import { useEffect, useState } from "react";
import { BlogDisplay } from "../component/BlogDisplay";
import { SideBlog } from "../component/SideBlog";
import { useBlog } from "./useBlog";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const ContentPage = () => {
    const {loading, blog } = useBlog();

if(loading){
   return(
    <>
    <div>Loading.....</div>
    </>
   )
}
    return (
        <>
            <section className="mx-8">
                <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
                    <div className="col-span-3">
                        <div className="space y-8">
                            {blog.map((item: any) => (
                                <BlogDisplay id={item.id} username={item.author.name} heading={item.title} content={item.content} imagelink={item.imagelink} date={item.createdAT} />
                            ))}
                            {/* {blog} */}
                        </div>
                    </div>
                    <div className="min-h-screen border-l-1 border-slate-200">
                        <div className="p-8 sticky top-4">
                            <div className="font-semibold text-400 text-base">
                                Staff Picks
                            </div>
                            {blog.slice(0, 4).map((item: any) => (
                                <SideBlog username={item.author.name} heading={item.title} date="just now" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}