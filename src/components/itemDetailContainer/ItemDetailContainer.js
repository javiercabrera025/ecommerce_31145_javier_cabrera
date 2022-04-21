import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncmock";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({setCart, cart}) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getProductsById(productId)
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <div>
      <section>
        <div className="container mx-auto pl-5 pr-5">
          {loading ? (
            <h1 className="mt-5 font-sans text-xl font-semibold text-white">Cargando...</h1>
          ) : product ? (
            <ItemDetail {...product} setCart={setCart} cart={cart}/>
          ) : (
            <h1 className="mt-5 font-sans text-xl font-semibold text-white">El producto no existe</h1>
          )}
        </div>
      </section>
    </div>
  );
};

export default ItemDetailContainer;