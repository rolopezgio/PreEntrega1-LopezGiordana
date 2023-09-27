import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({ productData }) => {

  return (
    <div className="productoDetalles">
      <h3>Detalles del producto</h3>
      <br />
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={productData.image} />

        <Card.Body className="cardDetalleBody">
          <Card.Title>{productData.nombre}</Card.Title>

          <Card.Text>{productData.detalles}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush cardDetalleBody">
          <ListGroup.Item> USD {productData.precio}</ListGroup.Item> 
        </ListGroup>
        <Card.Body className="cardDetalleBodyContador">
          <ItemCount />
          <br />
          <Button variant="outline-secondary"> Agregar producto </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetailContainer