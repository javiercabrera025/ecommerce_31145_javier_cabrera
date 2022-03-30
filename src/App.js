import "./assets/css/styles.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={'This is Gaming House'} />
    </div>
  );
}

export default App;
