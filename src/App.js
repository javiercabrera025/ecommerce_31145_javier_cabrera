import "./assets/css/styles.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer  greetings={'Productos'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greetings={'Productos'}/>} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
