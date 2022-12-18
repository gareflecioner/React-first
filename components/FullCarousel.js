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
                <h3>Image1</h3>
                <p>Text1</p>
            </Carousel.Caption>    
        </CarouselItem>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={Card2}
                alt='Image2'
            />
            <Carousel.Caption>
                <h3>Image2</h3>
                <p>Text2</p>
            </Carousel.Caption>    
        </CarouselItem>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={Card3}
                alt='Image3'
            />
            <Carousel.Caption>
                <h3>Image3</h3>
                <p>Text3</p>
            </Carousel.Caption>    
        </CarouselItem>
      </Carousel>
    )
  }
}

export default FullCarousel