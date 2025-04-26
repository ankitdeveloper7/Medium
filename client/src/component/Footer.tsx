export const Footer = () =>{
    return(
        <>
        <div className="hidden md:contents">
        <div className="max-w-7xl mx-auto py-4 px-6 ">
        <div className="hidden md:contents flex justify-center">
            <div className=" text-center">
               <a className="mr-4" href="">Help</a>
               <a className="mr-4" href="">Status</a>
               <a className="mr-4" href="">About</a>
               <a className="mr-4" href="">Careers</a>
               <a className="mr-4" href="">Press</a>
               <a className="mr-4" href="">Blog</a>
               <a className="mr-4" href="">Privacy</a>
               <a className="mr-4" href="">Rules</a>
               <a className="mr-4" href="">Terms</a>
               <a className="mr-4" href="">Text to speech</a>
                </div>
        </div>
        <div className="md:hidden">
            <a className="mr-4" href="">About</a>
            <a className="mr-4" href="">Help</a>
            <a className="mr-4" href="">Terms</a>
            <a className="mr-4" href="">Privacy</a>
        </div>

        </div>
        </div>
        </>
    )
}