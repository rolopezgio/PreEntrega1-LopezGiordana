import { useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { getDocs, collection, getFirestore } from 'firebase/firestore'


const ItemListContainer = () => {
    const[data, setData]= useState([])

    useEffect(()=>{
        const db = getFirestore();
        const productsCollection = collection(db, 'products');
        const productsFilter = productsCollection;
        getDocs(productsFilter).then((snapshot) => {
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })

    },[])

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