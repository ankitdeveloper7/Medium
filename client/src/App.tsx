import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import {Home} from "./pages/Landingpage/Home";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
