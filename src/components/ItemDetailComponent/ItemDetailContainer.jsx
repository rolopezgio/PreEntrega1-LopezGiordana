import React from 'react'

const ItemDetailContainer = ({productData}) => {
  return ( //Mejorar las cards, falta el detalle del producto

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{productData.nombre}</Card.Title>
        <Card.Text>
          {productData.descripcion}
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