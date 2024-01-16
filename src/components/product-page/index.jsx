import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
const API = "https://65a14b9c600f49256fb15fe1.mockapi.io/products"

const CardComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log("Error fetching data", error));
    },[]);

    const addRandomRating = (data) => {
      return data.map(product => ({
        ...product,
        rating: Math.floor(Math.random() * 6), 
      }));
    };
  
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(<span key={i}>&#9733;</span>); 
      }
      return stars.slice(0, rating);
    };
  

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} md={4}>
            <Card style={{ margin: '10px' }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {product.price}$
                </Card.Text>
                <Card.Text>
                  <strong>Rating:</strong> {renderStars(product.rating)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardComponent