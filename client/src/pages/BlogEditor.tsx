
import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Header } from '../component/Header';
import { API_URL } from '../API_URL';
import axios from 'axios';
// @ts-ignore
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);

export const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const[image, getimagelink] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
    imageResize: {
      parchment: Quill.import('parchment')
    }
  };

  async function sendData() {
    await axios.post(`${API_URL}/api/v1/blog`,{
      title: title,
      content: value,
      imagelink:image
    },
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      window.open("/", "_self")
  }
  const renderData = (htmlContent: string) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 mx-8">
          <div className="border-r border-slate-200 flex flex-col px-2">
            <div className="mb-5">
              <input
                type="text"
                placeholder="Write your Blog title here"
                className="outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-xl p-2.5"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex-grow">
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                className="h-8/10"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Image link of the blog"
                className="border text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                onChange={(e) => getimagelink(e.target.value)}
              />
            </div>
            <button className="bg-black text-white w-full  p-2 text-lg cursor-pointer mb-2 " onClick={sendData}>
              Publish
            </button>
          </div>
          <div className="p-8 overflow-y-auto">
            <div className='text-xl md:text-3xl max-w-xl text-[#242424] font-[700] pb-2'>{title}</div>
            <div><img src={image} className='w-full my-4' /> </div>
            <div>{renderData(value)}</div>
          </div>
        </div>
      </div>

    </>
  )
}
