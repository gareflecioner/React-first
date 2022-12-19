import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

function ThreeCard(props) {
  return (
    <CardGroup>
        <Card>
            <Card.Img variant='top'
            src={props.posts.img1}/>
            <Card.Body>
            <h1><Card.Title>
            {props.posts.title1}
            </Card.Title></h1>
            <h6><Card.Text>
            {props.posts.text1}
            </Card.Text></h6>
            </Card.Body>
            <Card.Link class='container'
            href={props.posts.url1}>
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
            <h1><Card.Title>
            {props.posts.title2}
            </Card.Title></h1>
            <h6><Card.Text>
            {props.posts.text2}
            </Card.Text></h6>
            </Card.Body>
            <Card.Link class='container' 
            href={props.posts.url2}>
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
            <h1><Card.Title>
            {props.posts.title3}
            </Card.Title></h1>
            <h6><Card.Text>
            {props.posts.text3}
            </Card.Text></h6>
            </Card.Body>
            <Card.Link class='container'
            href={props.posts.url3}>
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