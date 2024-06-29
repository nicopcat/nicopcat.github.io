---
title: "10. POST请求"
showToc: false
layout: doc
---
# 10. POST请求


```jsx
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    const blog = { title, body, author };
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(blog)
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        alert('博客发表成功~')
        
      }
      setIsPending(false)
    })
  }

  return ( 
    <div className="create">
      <h2>Create a new blog</h2>
      <div className="content">
        {isPending && <div>上传中……</div> }
        <form onSubmit={handleSubmit}>
          <label>标题</label>
          <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />
          <label>内容</label>
          <textarea required rows={ 10} value={body} onChange={(e)=>setBody(e.target.value)}/>
          <label>作者</label>
          <input type="text" required  value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        </form>
        <button onClick={handleSubmit} disabled={isPending}>{ isPending? "正在提交……":"提 交" }</button>
      </div>
    </div>
   );
}
 
export default Create;
```