import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Card1 from '../image/Card1.jpg'

function ThreeCard() {
  return (
    <CardGroup>
        <Card>
            <Card.Img variant='top'
            src={Card1}/>
            <Card.Body>
            <Card.Title>
            Исполнитель- Альбом
            </Card.Title>
            <Card.Text>
            Кратко об альбоме
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
            src={Card1}/>
            <Card.Body>
            <Card.Title>
            Исполнитель- Альбом
            </Card.Title>
            <Card.Text>
            Кратко об альбоме
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
            src={Card1}/>
            <Card.Body>
            <Card.Title>
            Исполнитель- Альбом
            </Card.Title>
            <Card.Text>
            Кратко об альбоме
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