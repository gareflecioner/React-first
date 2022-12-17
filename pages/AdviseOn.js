import React from 'react'
import {Form} from '../components/Form'
import {MyButton} from '../components/MyButton'
 export function AdviseOn() {
  return (
    <>
      <h1>Отправьте нам ваш альбом.</h1>
      <div className='container py-2'/>
      <Form/>
      <div className='container py-2'/>
      <MyButton>Отправить</MyButton>

    </>  
    
  )
}

export default AdviseOn