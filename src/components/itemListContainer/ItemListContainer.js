import "./itemListContainer.css";
import { useState } from "react";
import ItemCount from "../itemCount/ItemCount";

const ItemListContainer = (props) => {
  const [show] = useState(true);
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`);
  };
  return (
    <div>
      <h1 className="title">{props.greetings}</h1>
      <div>
        {show ? <ItemCount initial={0} stock={10} onAdd={handleOnAdd} /> : null}
      </div>
    </div>
  );
};

export default ItemListContainer;
