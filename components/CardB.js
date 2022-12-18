import React from 'react'
import { Card } from 'react-bootstrap'
import Card1 from '../image/Card1.jpg'


function CardB (props) {
  return (
    <Card style={{width: '18rem'}}>
        <Card.Img variant='top'
        src={Card1}/>
        <Card.Body>
        <Card.Title>
        {props.posts.title}
        </Card.Title>
        <Card.Text>
        {props.posts.text}
        </Card.Text>
        </Card.Body>
        <Card.Link href='#'>
            Card Link
        </Card.Link>
    </Card>
  )
}

export default CardB;