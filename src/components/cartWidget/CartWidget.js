import "./cartWidget.css";
import { ShoppingCartIcon } from '@heroicons/react/solid'
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { getQuantity} = useContext(CartContext)
  return (
    <Link to="/cart" className="count-product flex">
      <ShoppingCartIcon className="shopping-cart-icon text-white"/>
      <span className="Count-product">
        {getQuantity()}
      </span>
    </Link>
  );
};

export default CartWidget;
