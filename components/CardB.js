import React from 'react'
import { Card } from 'react-bootstrap'
import Card1 from '../image/Card1.jpg'


function CardB() {
  return (
    <Card style={{width: '18rem'}}>
        <Card.Img variant='top'
        src={Card1}/>
        <Card.Body>
        <Card.Title>
            Card Title
        </Card.Title>
        <Card.Text>
            Card Text
        </Card.Text>
        </Card.Body>
        <Card.Link href='#'>
            Card Link
        </Card.Link>
    </Card>
  );
}

export default CardB