import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({create}) {
  const [post, setPost] = useState({title: '', body: ''});

  function addNewPost(e) {
    // убираем дефолтое поведение, обновление страницы
  e.preventDefault() 

  const newPost = {
    ...post, id: Date.now()
  }
  create(newPost)
  setPost({title: '', body: ''})
   }

  return (
    <form name='5'>
    {/* управляемый input */}
    <MyInput 
       value={post.title}
       onChange = {e => setPost({...post, title: e.target.value})}
       type="text"  
       placeholder="Posts title" />
    <MyInput 
       value={post.body}
       onChange = {e => setPost({...post, body: e.target.value})}
       type="text"  
       placeholder="Posts description" />
         
    <MyButton onClick={addNewPost}>Add Post</MyButton>
  </form>
  )
}
