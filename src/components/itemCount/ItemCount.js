import { useState } from "react";
import "./itemCount.scss";


const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-count">
      <div className="flex flex-row items-center justify-between">
        <button onClick={decrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 12H4"
            />
          </svg>
        </button>
        <p className="font-sans font-bold text-lg"> {count} </p>
        <button onClick={increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <button
        onClick={count > 0 ? () => onAdd(count) : undefined}
       className="add-to-cart-button"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
