import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './style.scss';

const Cards= (data) => {
  
  const { id, title, description, images, thumbnail, brand, category} = data.data

  return (
    <Card class="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Brand: {brand}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <div class="footer">
          <Button variant="primary">Add to cart</Button>
          <Button variant="primary">Buy Now</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;