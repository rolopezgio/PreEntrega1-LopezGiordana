import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import "./ItemDetailContainer.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = ({ productData }) => {

  const [onAdd, setOnAdd] = React.useState(false);

  const buttonStyles = {
    backgroundColor: "blue",
  };

  const buttonStylesOnAdd = {
    backgroundColor: "green", //agregar emergente con producto agregado
  };

  return (
    <div className="productoDetalles">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productData.image} />
        <Card.Body className="cardDetalleBody">
          <Card.Title>{productData.nombre}</Card.Title>
          <Card.Text>
            {productData.detalles}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush cardDetalleBody">
          <ListGroup.Item>{productData.precio}</ListGroup.Item>          
          <ListGroup.Item>{productData.stock}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="cardDetalleBody">
          <ItemCount />
          <Button
            style={onAdd ? buttonStylesOnAdd : buttonStyles}
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetailContainer