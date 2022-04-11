import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncmock";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsById(1)
      .then((item) => {
        setProducts(item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section>
        <div className="container mx-auto pl-5 pr-5">
          <ItemDetail {...products} />
        </div>
      </section>
    </div>
  );
};

export default ItemDetailContainer;
