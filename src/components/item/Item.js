import "./item.scss";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <Link
      to={`/detail/${id}`}
      className="product-item"
    >
      <picture>
        <img src={pictureUrl} alt={title} className="w-full" />
      </picture>
      <div className="product-item-info">
        <h3 className="product-title text-s">{title}</h3>
        <p className="product-price text-m">
          ${price}
        </p>
      </div>
    </Link>
  );
};

export default Item;
