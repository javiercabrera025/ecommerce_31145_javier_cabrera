import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { getDocs, collection, query, where,  } from  "firebase/firestore";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../service";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
    ? query (collection(firestoreDb, 'products'), where('category', '==', categoryId))
    : collection(firestoreDb, 'products')
    getDocs(collectionRef).then(response =>{
      const products = response.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setProducts(products);
    })
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
