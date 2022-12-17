import React from 'react'
import ThreeCard from '../components/ThreeCard'

 export function Posts() {
  return (
    <>
      <h1 className='container py-3'>Все рецензии.</h1>
      <ThreeCard/>
      <div className='container py-3'/>
      <ThreeCard/>
      <div className='container py-3'/>
      <ThreeCard/>
      
    </>
  );
}

export default Posts;