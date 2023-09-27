import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useParams } from 'react-router-dom';

const Category = () => {
    const { categoryId } = useParams();   

  return <div style={{ display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"center", margin:"1rem" }}> 
  <h3>Productos {categoryId}</h3>
  <ItemListContainer categoryId={categoryId}/> 
  </div>
};

export default Category;