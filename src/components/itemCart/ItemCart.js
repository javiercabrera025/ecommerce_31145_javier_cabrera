import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./itemCart.scss";

const ItemCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );

  if (cart.length === 0) {
    return (
      <div className="mt-10 container mx-auto no-items pt-10 pb-10 product-item shadow shadow-black">
        <h1 className="mb-10 text-white text-center">No hay productos</h1>
        <Link
          to="/"
          type="button"
          className="button-primary mt-5 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 container mx-auto">
      <div className="flow-root">
        <ul className="-my-6 divide-y divide-gray-200">
          {cart.map((prod) => (
            <li
              key={prod.id}
              className="product-item shadow shadow-black flex mb-5"
            >
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={prod.pictureUrl}
                  alt={prod.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-white text">
                    <h3>{prod.title}</h3>
                    <div className="ml-4 text-right">
                      <p>${prod.price}</p>
                      <p className="mt-3">
                        Subtotal: ${prod.quantity * prod.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-white">Qty: {prod.quantity}</p>

                  <div className="flex">
                    <button
                      onClick={() => removeItem(prod.id)}
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-item shadow shadow-black mt-5">
        <div className="flex justify-between text-base font-medium text-white">
          <p>Total</p>${total}
        </div>
        <p className="mt-0.5 text-sm text-white">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <Link
            to="/form"
            type="button"
            className="button-primary mt-5 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          >
            Generar orden
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
