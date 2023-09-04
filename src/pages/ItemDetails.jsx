import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailComponent/ItemDetailContainer'
import { getProducts } from '../json/ProductsData'


const ItemDetails = () => {
  const[product, setproduct]= useState({})
    const {itemId} = useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=>{
           setproduct(res.find((item)=> item.id === parseInt(itemId)))
        })
    },[itemId])

  return (
    <ItemDetailContainer product={product} />
  )
}

export default ItemDetails