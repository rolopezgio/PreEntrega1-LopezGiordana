import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {cartItems} = useContext(CartContext);
  return (
    <div className="cartContainer">
      <strong><i class="bi bi-cart-check"></i> {cartItems} </strong>  
    </div>
  );
};

export default CartWidget;