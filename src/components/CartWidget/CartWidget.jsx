import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {cartItems} = useContext(CartContext);
//Falta icono del carrito
  return (
    <div className="cartContainer">
      <strong><i className="bi bi-cart-check"></i> {cartItems} </strong>  
    </div>
  );
};

export default CartWidget;