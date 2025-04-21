
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const BlogEditor = () =>{
    const [value, setValue] = useState('');
    
    function saveContent(){
        console.log("save content", value)
    }
    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean']
        ],
      };
      
const renderData = (htmlContent: string) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  };

    return(
        <>
       <div>
        <h2>Write you blog here</h2>
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
        <button onClick={saveContent}>Save</button>
        <p>this is the content section :- {renderData(value)} </p>
       </div>
        </>
    )
}
