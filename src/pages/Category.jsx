import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { productsData } from '../json/ProductsData';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { categoryId } = useParams ();  //FALTA EL FILTRO DE CATEGORIAS
    console.log(categoryId);

  return <ItemListContainer productsData={productsData} /> 
};

export default Category;