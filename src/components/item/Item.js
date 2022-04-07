const Item = ({ title, price, pictureUrl }) => {
  return (
    <div>
      <picture>
        <img src={pictureUrl} alt={title} className="w-full"/>
      </picture>
      <h3 className="font-sans	text-2xl mt-2">{title}</h3>
      <p className="mt-5 font-sans	text-xl font-semibold">${price}</p>
      <button className="mt-5 mb-5 w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Ver Detalle
      </button>
    </div>
  );
};

export default Item;
