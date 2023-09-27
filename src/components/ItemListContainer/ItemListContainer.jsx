import { useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { getDocs, collection, getFirestore, where, query  } from 'firebase/firestore'
import LoaderComponent from "../LoaderComponent/LoaderComponent";



const ItemListContainer = ( {categoryId} ) => {
    const[data, setData]= useState([])
    const[loading, setLoading]= useState(false)


    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const productsCollection = categoryId ? query(collection(db, 'products'), where("categoria", "==", categoryId)) :collection(db, 'products');
        getDocs(productsCollection).then((snapshot) => {
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[categoryId])

    const navigate = useNavigate ();

    return (
        <>
         {loading ? <LoaderComponent /> : <div className="productosContainer">
              {data.map((item) => {
                  return (
                      <Card style={{ width: '20rem' }} key={item.id}>
                          <Card.Img variant="top" src={item.image} />
                          <Card.Body className="cardBody">
                              <Card.Title>{item.nombre}</Card.Title>
                              <Card.Text>{item.descripcion}</Card.Text>
                              <Button variant="outline-dark" onClick={() => navigate (`/item/${item.id}`)}>Ver detalles</Button>
                          </Card.Body>
                      </Card>
                  );
              })}
  
          </div>}
        </>
      );
  };
  

export default ItemListContainer;