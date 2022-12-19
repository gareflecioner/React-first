import React, { useState } from 'react'
import {MyButton} from '../components/MyButton'
import MyInput from '../components/MyInput'


 export function AdviseOn() {

const[posts,setPosts]= useState([''])

const [executor,setExecutor] = useState('')

const [album,setAlbum] = useState('')

const PostAlbum=(e)=> {
  e.preventDefault()
  const newAlbum={
    id:Date.now(),
    executor,
    album
  }
  setPosts([...posts,newAlbum])
}

  return (
    <>
      <h1>Отправьте нам ваш альбом.</h1>
      <div className='container py-2'/>
      <MyInput 
      type='text' placeholder="email@example.com"> Ваш Email</MyInput>
      <MyInput value={executor} onChange={e=> setExecutor(e.target.value)}
      type='text' placeholder="Исполнитель.">Исполнитель.</MyInput>
      <MyInput value={album} onChange={e=> setAlbum(e.target.value)}
       type='text' placeholder="Название Альбома.">Название Альбома.</MyInput>
       <div className='container py-2'/>
      <MyButton onClick={PostAlbum}>Отправить</MyButton>

      {/* <CardB posts={{text:posts , title:'Предложка'}}/> */}

    </>  
    
  )
}

export default AdviseOn