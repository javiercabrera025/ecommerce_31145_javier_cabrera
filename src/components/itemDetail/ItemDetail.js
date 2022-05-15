import "./itemDetail.scss";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";
import CartContext from "../../context/CartContext";


const ItemDetail = ({ id, title, price, pictureUrl, description, stock }) => {
  const { addItem, isInCart } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
    const objProd = {
      id, title, price, quantity, pictureUrl
    }
    addItem(objProd)
  }
  return (
    <div className="product-detail grid grid-cols-1 gap-6 lg:grid-cols-2 md:grid-cols-2">
      <div className="product-detail-col">
        <picture>
          <img src={pictureUrl} alt={title} />
        </picture>
      </div>
      <div className="product-detail-col">
        <h1 className="font-sans text-2xl mt-2 text-white">{title}</h1>
        <p className="mt-5 font-sans text-xl font-semibold text-white">
          ${price}
        </p>
        <p className="mt-5 font-sans text-l mt-2 text-white">{description}</p>
        {isInCart(id) ? <Link to='/cart' className="add-to-cart-button text-center">Finish</Link> : <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />}
      </div>
    </div>
  );
};

export default ItemDetail;
