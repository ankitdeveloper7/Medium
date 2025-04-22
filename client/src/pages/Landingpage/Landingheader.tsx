 export const Landingheader = () =>{

    function openSignup(){
        {window.open("/auth", "_self")}
    }
    return (
        <>
        <section>
            <div className="relative max-w-7xl mx-auto py-4 px-6">
            <div className="inline-block text-4xl font-serif font-semibold">Medium</div>
            <div className="inline-block absolute right-2">
                <span className="hidden sm:contents">
                <a className="pr-8" href="#">Our story</a>
                <a className="pr-8" href="#">Membership</a>
                <a className="pr-8" href="#">Write</a>
                </span>
                <a className="pr-8" href="#">Sign in</a>
               <button className="text-white bg-black rounded-full px-4 py-2 cursor-pointer" onClick={openSignup}>Get Started</button>
            </div>
        </div>
        </section>
        </>
    )
 }