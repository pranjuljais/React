import CartContextProvider from "./store/shoppingCart-Context.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
