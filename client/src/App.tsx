import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Blog from "./pages/Blog";
import {Home} from "./pages/Landingpage/Home";
import { Mainpage } from "./pages/Mainpage";
import { BlogEditor } from "./pages/BlogEditor";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/writeblog" element={<BlogEditor />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
