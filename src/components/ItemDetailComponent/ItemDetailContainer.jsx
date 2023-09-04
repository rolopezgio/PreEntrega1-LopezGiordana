import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'

const ItemDetailContainer = ({product}) => {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer