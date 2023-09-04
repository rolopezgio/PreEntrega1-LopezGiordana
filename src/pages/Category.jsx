import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useParams } from 'react-router-dom';

const Category = () => {
    const { categoryId } = useParams();  //FALTA EL FILTRO DE CATEGORIAS
    

  return <ItemListContainer categoryId={categoryId}/> 
};

export default Category;