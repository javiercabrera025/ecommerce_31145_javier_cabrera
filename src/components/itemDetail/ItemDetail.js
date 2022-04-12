import "./itemDetail.css";
const ItemDetail = ({ title, price, pictureUrl, description }) => {
  return (
    <div className="product-detail">
      <picture>
        <img src={pictureUrl} alt={title} />
      </picture>
      <h1 className="font-sans text-2xl mt-2 text-white">{title}</h1>
      <p className="mt-5 font-sans text-xl font-semibold text-white">${price}</p>
      <p className="mt-5 font-sans text-l mt-2 text-white">{description}</p>
    </div>
  );
};

export default ItemDetail;
