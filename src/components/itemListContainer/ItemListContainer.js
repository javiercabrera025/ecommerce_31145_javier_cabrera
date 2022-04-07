import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../itemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="title mb-10">{props.greetings}</h1>
      <section>
        <div className="container mx-auto pl-5 pr-5">
          <ItemList products={products} />
        </div>
      </section>
    </div>
  );
};

export default ItemListContainer;
