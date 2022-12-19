import React from 'react'
import ThreeCard from '../components/ThreeCard'
import Card1 from '../image/Card1.jpg'
import Card2 from '../image/Card2.jpg'
import Card3 from '../image/Card3.jpg'
import Card4 from '../image/Card4.jpg'
import Card5 from '../image/Card5.jpg'
import Card6 from '../image/Card6.jpg'
import PageCard from './PageCard';

 export function Posts() {
  return (
    <>
      <h1 className='container py-3'>Все рецензии.</h1>
      <ThreeCard posts={{img1:Card1 ,title1:'Скриптонит', text1:' Дом с нормальными явлениями',
      img2:Card2,title2:'Gruppa Skryptonite ',text2:'Solitude',
      img3:Card3,title3:'Saluki', text3:'Властелин Калек'}}/>
      <ThreeCard posts={{img1:Card4 ,title1:'Kanye West', text1:'Life of Pablo',
      img2:Card5,title2:'Oxxxymiron',text2:'Горгород',
      img3:Card6,title3:'Massive Attack', text3:'Heligoland'}}/>  
      
      
    </>
  );
}

export default Posts;