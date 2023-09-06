import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({product}) => {
  return (
    <div className="productoDetalles">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="cardDetalleBody">
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.detalles}
        </Card.Text>
        <Card.Text>
          {product.talles}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush cardDetalleBody">
        <ListGroup.Item>{product.precio}</ListGroup.Item>
        <ListGroup.Item>{product.descuento}</ListGroup.Item>
        <ListGroup.Item>{product.cuotas}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="cardDetalleBody">
        <Button>Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetailContainer