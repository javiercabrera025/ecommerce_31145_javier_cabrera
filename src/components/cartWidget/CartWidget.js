import { Disclosure } from "@headlessui/react";
import "./cartWidget.css";
import { ShoppingCartIcon } from '@heroicons/react/solid'
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getQuantity} = useContext(CartContext)
  return (
    <Disclosure as="a" href="#" className="count-product flex">
      <ShoppingCartIcon className="shopping-cart-icon text-white"/>
      <span className="Count-product">
        {getQuantity()}
      </span>
    </Disclosure>
  );
};

export default CartWidget;
