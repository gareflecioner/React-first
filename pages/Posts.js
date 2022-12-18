import React from 'react'
import CardB from '../components/CardB';
import ThreeCard from '../components/ThreeCard'
import Card1 from '../image/Card1.jpg'
import Card2 from '../image/Card2.jpg'
import Card3 from '../image/Card3.jpg'
import Card4 from '../image/Card4.jpg'
import Card5 from '../image/Card5.jpg'
import Card6 from '../image/Card6.jpg'

 export function Posts() {
  return (
    <>
      <h1 className='container py-3'>Все рецензии.</h1>
      <ThreeCard posts={{img1:Card1 ,title1:'Заголовок1', text1:'Текст 1',
      img2:Card2,title2:'Заголовок 2',text2:'Текст 2',
      img3:Card3,title3:'Заголовок 3', text3:'Текст 3'}}/>
      <ThreeCard posts={{img1:Card4 ,title1:'Заголовок4', text1:'Текст 4',
      img2:Card5,title2:'Заголовок 5',text2:'Текст 5',
      img3:Card6,title3:'Заголовок 6', text3:'Текст 6'}}/>  
      
      
    </>
  );
}

export default Posts;