import React, { Component } from 'react'
import { CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Card1 from '../image/Card1.jpg'
import Card2 from '../image/Card2.jpg'
import Card3 from '../image/Card3.jpg'




export class FullCarousel extends Component {
  render() {
    return (
      <Carousel fade>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={ Card1 }
                alt='Image1'
            />
            <Carousel.Caption>
                {/* <li>Скриптонит</li>
                <p>Дом с нормальными явлениями.</p> */}
            </Carousel.Caption>    
        </CarouselItem>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={Card2}
                alt='Image2'
            />
            <Carousel.Caption>
                {/* <p>Image2</p>
                <p>Text2</p> */}
            </Carousel.Caption>    
        </CarouselItem>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={Card3}
                alt='Image3'
            />
            <Carousel.Caption>
                {/* <p>Image3</p>
                <p>Text3</p> */}
            </Carousel.Caption>    
        </CarouselItem>
      </Carousel>
    )
  }
}

export default FullCarousel