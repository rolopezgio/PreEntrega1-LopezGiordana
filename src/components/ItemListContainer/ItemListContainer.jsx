import { useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainer = ({ productsData }) => {

const navigate = useNavigate ();

    return (
        <div className="productosContainer">
            {productsData.map((item) => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>{item.descripcion}</Card.Text>
                            <Button variant="primary" onClick={() => navigate (`/item/${item.id}`)}>Ver producto</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemListContainer;