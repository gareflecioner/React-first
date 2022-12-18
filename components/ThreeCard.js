import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Card4 from '../image/Card4.jpg'
import Card5 from '../image/Card5.jpg'
import Card6 from '../image/Card6.jpg'

function ThreeCard(props) {
  return (
    <CardGroup>
        <Card>
            <Card.Img variant='top'
            src={props.posts.img1}/>
            <Card.Body>
            <Card.Title>
            {props.posts.title1}
            </Card.Title>
            <Card.Text>
            {props.posts.text1}
            </Card.Text>
            </Card.Body>
            <Card.Link 
            href='#'>
            Подробнее
            </Card.Link>
            <Card.Footer>
                <small
                className='text-muted'>Last updated 1 minutes ago</small>
            
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant='top'
            src={props.posts.img2}/>
            <Card.Body>
            <Card.Title>
            {props.posts.title2}
            </Card.Title>
            <Card.Text>
            {props.posts.text2}
            </Card.Text>
            </Card.Body>
            <Card.Link 
            href='#'>
            Подробнее
            </Card.Link>
            <Card.Footer>
                <small
                className='text-muted'>Last updated 2 minutes ago</small>
            
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant='top'
            src={props.posts.img3}/>
            <Card.Body>
            <Card.Title>
            {props.posts.title3}
            </Card.Title>
            <Card.Text>
            {props.posts.text3}
            </Card.Text>
            </Card.Body>
            <Card.Link 
            href='#'>
            Подробнее
            </Card.Link>
            <Card.Footer>
                <small
                className='text-muted'>Last updated 3 minutes ago</small>
            
            </Card.Footer>
        </Card>
    </CardGroup>
  )
}

export default ThreeCard