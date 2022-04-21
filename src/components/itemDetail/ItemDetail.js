import "./itemDetail.css";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";
import CartContext from "../../context/CartContext";


const ItemDetail = ({ id, title, price, pictureUrl, description, stock }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem } = useContext(CartContext)
  
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
    const objProd = {
      id, title, price, quantity
    }
    addItem(objProd)
  }
  return (
    <div className="product-detail">
      <picture>
        <img src={pictureUrl} alt={title} />
      </picture>
      <h1 className="font-sans text-2xl mt-2 text-white">{title}</h1>
      <p className="mt-5 font-sans text-xl font-semibold text-white">
        ${price}
      </p>
      <p className="mt-5 font-sans text-l mt-2 text-white">{description}</p>
      {quantity > 0 ? <Link to='/cart' className="button-primary mt-5 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">Finalizar compra</Link> : <ItemCount initial={0} stock={10} onAdd={handleOnAdd} /> } 
    </div>
  );
};

export default ItemDetail;
