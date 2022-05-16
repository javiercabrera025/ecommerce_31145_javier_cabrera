import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import "./form.scss";

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

    const { cart } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const initialValue = 0;

    const total = cart.reduce(
        (accumulator, current) => accumulator + current.price * current.quantity,
        initialValue
    );

    if (loading) {
        return <h1>Se esta generando su orden</h1>;
    }

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

    const cartItems = JSON.stringify(objOrder.items);


    const handleSubmit = (e) => {

        e.preventDefault();
        setLoading(true);

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
            .then(({ orderId }) => {
                batch.commit();
                console.log(`El id de la orden es ${orderId}`);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                setSuccess(true);
            });
    }

    return (
        <>
            <button className="button-primary text-center text-white text-base" type="button" onClick={() => setShowModal(true)}>
                Place order
            </button>
            {showModal ? (
                <>
                    <div className="cart-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="cart-modal-body">
                            {success
                                ?
                                <>
                                    <h3 className="text-white text-center text-3xl capitalize font-normal mb-5">Buyer</h3>
                                    <p className="text-white text-center mb-5 text-xl">{objOrder.buyer.name}</p>
                                    <p className="text-white text-center mb-5 text-xl">{objOrder.buyer.phone}</p>
                                    <p className="text-white text-center mb-5 text-xl">{objOrder.buyer.email}</p>

                                </>
                                :
                                <>
                                    <h3 className="text-white text-left text-3xl capitalize font-normal mb-5">Fill the form</h3>
                                    <form onSubmit={handleSubmit}>
                                        <input type='text'
                                            placeholder='Name'
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <input type='number'
                                            placeholder='Phone Number'
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                        <input type='email'
                                            placeholder='Email'
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button type='submit' className="button-primary text-white text-base">Place Order</button>
                                    </form>
                                </>
                            }
                            <button
                                className="close-modal"
                                type="button"
                                onClick={() => setShowModal(false)}>
                                X
                            </button>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Form;
