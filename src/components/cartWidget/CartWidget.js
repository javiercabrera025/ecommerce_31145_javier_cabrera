import { Disclosure } from "@headlessui/react";
import "./cartWidget.css";
import { ShoppingCartIcon } from '@heroicons/react/solid'

const CartWidget = () => {
  return (
    <Disclosure as="a" href="#" className="count-product flex">
      <ShoppingCartIcon className="shopping-cart-icon text-white"/>
      <span className="Count-product">4</span>
    </Disclosure>
  );
};

export default CartWidget;
