import { useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProducts } from "../../json/ProductsData";
import { useEffect, useState } from "react";


const ItemListContainer = ({categoryId}) => {
    const[data, setData]= useState([])
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(categoryId){
                setData(res.filter((item)=> item.categoria === categoryId))
            }else{
                setData(res)
            }
        })
    },[categoryId])

    const navigate = useNavigate ();

    return (
        <div className="productosContainer">
            {data.map((item) => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body className="cardBody">
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


