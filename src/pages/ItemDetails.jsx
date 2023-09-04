import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailComponent/ItemDetailContainer'

const ItemDetails = () => {
    const {itemId} = useParams() //Falta el click para el id 

  return (
    <ItemDetailContainer productData={product} />
  )
}

export default ItemDetails