import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
export const Mainpage = ()=>{
    return (
        <>
        <Header />
        <Content />
        <Footer />
        </>
    )
}

const Content = () =>{
    return(
        <>
       <section className="mx-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2">this is main section</div>
            <div>this second section</div>
        </div>
       </section>
        </>
    )
}