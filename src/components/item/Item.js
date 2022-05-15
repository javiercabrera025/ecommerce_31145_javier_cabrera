import "./item.scss";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="product-item shadow shadow-black">
      <picture>
        <img src={pictureUrl} alt={title} className="w-full" />
      </picture>
      <h3 className="font-sans text-2xl mt-2 text-white">{title}</h3>
      <p className="mt-5 font-sans text-xl font-semibold text-white">
        ${price}
      </p>
      <Link
        to={`/detail/${id}`}
        className="button-primary mt-5 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
      >
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
