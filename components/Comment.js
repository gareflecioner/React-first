import Card from 'react-bootstrap/Card';

export const Comment=(...props)=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.comments.name}</Card.Title>
        <Card.Text>
        {props.comments.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Comment;