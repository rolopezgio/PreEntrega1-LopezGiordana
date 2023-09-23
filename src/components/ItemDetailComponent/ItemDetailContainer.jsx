import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import "./ItemDetailContainer.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = ({ product }) => {

  const [stock, setStock] = React.useState(5);
  const [onAdd, setOnAdd] = React.useState(false);

  const buttonStyles = {
    backgroundColor: "blue",
  };

  const buttonStylesOnAdd = {
    backgroundColor: "green",
  };

  return (
    <div className="productoDetalles">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="cardDetalleBody">
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>
            {product.detalles}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush cardDetalleBody">
          <ListGroup.Item>{product.precio}</ListGroup.Item>
          <ListGroup.Item>{product.descuento}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="cardDetalleBody">
          <ItemCount />
          {stock >= 5 ? <strong>Stock disponible</strong> : <strong>Ultimas unidades disponibles!</strong>}
          <Button
            style={onAdd ? buttonStylesOnAdd : buttonStyles}
            onClick={() => {
              setStock(stock - 1);
              setOnAdd(true);
            }}
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetailContainer