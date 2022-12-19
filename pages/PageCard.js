import React, { useState } from 'react'
import {MyButton} from '../components/MyButton'
import MyInput from '../components/MyInput'
import Comment from '../components/Comment';

 export function PageCard() {

const[comments,setComments]= useState([

  {id:1, name:'Name', opinion:'Opinion'},
])

const [opinion,setOpinion] = useState('')
const [name,setName] = useState('')


const PostComments=(e)=> {
  e.preventDefault()
  const newComments={
    id:Date.now(),
    name,
    opinion,
  }
  setComments([...comments,newComments])
}

  return (
    <>
      <h1>Отправьте нам ваш альбом.</h1>
      <div className='container py-2'/>
      <MyInput value={name} onChange={e=> setName(e.target.value)}
      type='text' placeholder="Ваше Имя."> Ваше Имя.</MyInput>
      <MyInput value={opinion} onChange={e=> setOpinion(e.target.value)}
      type='text' placeholder="Ваш отзыв.">Ваш отзыв.</MyInput>
       <div className='container py-2'/>
      <MyButton onClick={PostComments}>Отправить</MyButton>

      <Comment comments={{name:name ,text:opinion }}/>

    </>  
    
  )
}

export default PageCard