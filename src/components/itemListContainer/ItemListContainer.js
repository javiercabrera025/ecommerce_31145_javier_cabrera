import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  return (
    <section className="product-list">
      <div className="container mx-auto pl-5 pr-5">
        <h1 className="title mb-10 text-white">{props.greetings}</h1>
        <ItemList products={products} />
      </div>
    </section>
  );
};

export default ItemListContainer;
