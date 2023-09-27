import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css"

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };
  const handleRemoveProduct = () => {
    setCartItems(cartItems - 1);
    setCount(count - 1);
  };

  return (
    <div>
      <Button variant="outline-dark" onClick={handleRemoveProduct} > - </Button>
      <label className="contadorDetalles"> { count } </label>      
      <Button variant="outline-dark" onClick={handleAddProduct} > + </Button>
    </div>
  );
};

export default ItemCount;