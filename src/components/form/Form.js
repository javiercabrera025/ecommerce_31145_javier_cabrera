import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

import {
    getDocs,
    writeBatch,
    query,
    where,
    collection,
    documentId,
    addDoc,
} from "firebase/firestore";

import { firestoreDb } from "../../service/index";

const Form = () => {
    const [loading, setLoading] = useState(false)
    const { cart } = useContext(CartContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const initialValue = 0;
    const total = cart.reduce(
        (accumulator, current) => accumulator + current.price * current.quantity,
        initialValue
    );
    if (loading) {
        return <h1>Se esta generando su orden</h1>;
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const createOrder = () => {
        setLoading(true);

        const objOrder = {
            items: cart,
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            total: total,
            date: new Date(),
        };

        const ids = cart.map((prod) => prod.id);

        const batch = writeBatch(firestoreDb);

        const collectionRef = collection(firestoreDb, "products");

        const outOfStock = [];

        getDocs(query(collectionRef, where(documentId(), "in", ids)))
            .then((response) => {
                response.docs.forEach((doc) => {
                    const dataDoc = doc.data();
                    const prodQuantity = cart.find(
                        (prod) => prod.id === doc.id
                    )?.quantity;

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc });
                    }
                });
            })
            .then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, "orders");
                    return addDoc(collectionRef, objOrder);
                } else {
                    return Promise.reject({
                        name: "outOfStockError",
                        products: outOfStock,
                    });
                }
            })
            .then(({ id }) => {
                batch.commit();
                console.log(`El id de la orden es ${id}`);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
            />
            <input type='number'
                placeholder='Phone Number'
                onChange={(e) => setPhone(e.target.value)}
            />
            <input type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={() => createOrder()} type='submit'>submit</button>
        </form>
    )
}

export default Form;
