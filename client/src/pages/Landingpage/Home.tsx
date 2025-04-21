import { Landingheader } from './Landingheader';
import { Landingfooter } from './Landingfooter';

export const Home = () =>{
  return (
    <>
    <div className='flex flex-col min-h-screen bg-[#f7f4ed]'>
    <Landingheader />
   <hr />
   <div className='flex-1'>
   <Index />
   </div>
   
   <hr />
   <Landingfooter />
   </div>
      
   
    </>
    
  )
}


const Index = () =>{

  function onpenLogin(){
    {window.open("/mainpage", "_self")}
  }
return(
  <>
  <div className='max-w-7xl h-full flex  mx-auto   grid grid-cols-1 md:grid-cols-2'>
    <div className='text-[#242424] py-8 px-6'>
      <div className=' text-[80px] sm:text-7xl md:text-[120px]  leading-[74px] md:leading-[100px] text-400 font-serif'>
      Human <br /> stories & ideas
      </div>
      <div className='text-2xl text-400 text-[#242424] py-8'>A Place to read, write, and deepen your understanding</div>
      <button className='rounded-full px-[20px] py-[8px] text-2xl text-white  bg-green-700 md:text-white md:bg-black cursor-pointer' onClick={onpenLogin}>Start reading</button>
    </div>
    <div className='hidden md:contents relative'>
      <img className="absolute right-0 truncate" src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" width="460px" height="600px" loading='eager'/>
    </div>
   </div>
  </>
)
}
