import { BlogDisplay } from "../component/BlogDisplay";
import { SideBlog } from "../component/SideBlog";

export const ContentPage = () =>{
    return(
        <>
        <section className="mx-8">
         <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-3">
            <BlogDisplay username="Ankit Kumar" heading="Master Tech Marketing Using These Proven Strategies" date="10 min ago" />
                <BlogDisplay username="Alok kushwaha" heading="I Used to Sell , Now i Know Why SEO Felt Like Home" date="1 hr ago" />
                <BlogDisplay username="Amit Thakur" heading="New AI Niche to Go Viral and Make Money- Step By Step" date="10 hr ago" />
                <BlogDisplay username="Abhijeet Yadav" heading="Surviving as a consultant in an AI world" date="a day ago" />
                <BlogDisplay username="Sahil Srivastava" heading="How I Run a 5-Figure-a-Month Agency With 0 Employees" date="10 days ago" />
                </div>
            <div className="min-h-screen border-l-1 border-slate-200"> 
               <div className="p-8">
               <div className="font-semibold text-400 text-base">
                 Staff Picks
                </div>
                <SideBlog username="Ankit Kumar" heading="Master Tech Marketing Using These Proven Strategies" date="12 Apr" />
                <SideBlog username="Alok kushwaha" heading="I Used to Sell , Now i Know Why SEO Felt Like Home" date="11 Apr" />
                <SideBlog username="Amit Thakur" heading="New AI Niche to Go Viral and Make Money- Step By Step" date="10 Mar" />
                <SideBlog username="Abhijeet Yadav" heading="Surviving as a consultant in an AI world" date="16 Dec" />
                <SideBlog username="Sahil Srivastava" heading="How I Run a 5-Figure-a-Month Agency With 0 Employees" date="23 Jun" />
               </div>
            </div>
         </div>
        </section>
         </>
    )
}