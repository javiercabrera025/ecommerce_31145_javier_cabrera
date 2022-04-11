import "./assets/css/styles.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={'This is Gaming House'} />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
