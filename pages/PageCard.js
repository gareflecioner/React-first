import React, { useState } from 'react'
import {MyButton} from '../components/MyButton'
import MyInput from '../components/MyInput'
import Comment from '../components/Comment';
import  { useParams } from 'react-router-dom'

export function PageCard() {

// const{id}=useParams ();

// const[posts,setPosts] = useState(null)

const[comments,setComments]= useState('')
const [opinion,setOpinion] = useState('')
const [name,setName] = useState('')


const PostComments=(e)=> {
  e.preventDefault()
  const newComments={
    name,
    opinion,
  }
  setComments([...comments,newComments])
}

  return (
    <>
      {/* <div>
        {posts && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        )}
      </div> */}

      <h1>Отправьте нам ваш альбом.</h1>
      <div className='container py-2'/>
      <MyInput value={name} onChange={e=> setName(e.target.value)}
      type='text' placeholder="Ваше Имя."> Ваше Имя.</MyInput>
      <MyInput value={opinion} onChange={e=> setOpinion(e.target.value)}
      type='text' placeholder="Ваш отзыв.">Ваш отзыв.</MyInput>
       <div className='container py-2'/>
      <MyButton onClick={PostComments}>Отправить</MyButton>

      <Comment comments={comments}/>

    </>  
    
  )
}

export default PageCard