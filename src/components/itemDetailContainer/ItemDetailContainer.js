import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../service";
import { getDoc, doc } from "firebase/firestore";
import "./itemDetailContainer.scss";

const ItemDetailContainer = ({ setCart, cart }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDb, 'products', productId)).then(response => {
      const product = { id: response.id, ...response.data() };
      setProduct(product)
    })
    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <section className="product-detail-section">
      <div className="container mx-auto pl-5 pr-5">
        {loading ? (
          <h1 className="mt-5 font-sans text-xl font-semibold text-white">Cargando...</h1>
        ) : product ? (
          <ItemDetail {...product} setCart={setCart} cart={cart} />
        ) : (
          <h1 className="mt-5 font-sans text-xl font-semibold text-white">El producto no existe</h1>
        )}
      </div>
    </section>
  );
};

export default ItemDetailContainer;
