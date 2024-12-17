import React,{useState} from "react";
import ReactDOM from "react-dom";
import { ListContextProvider } from "./store/ListContext";
import { CartContextProvider } from "./store/CartContext";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
      setCartIsShown(true);
  };

  const hideCartHandler = () => {
      setCartIsShown(false);
  };

  return (
      <CartContextProvider>
          <ListContextProvider>
              <Header onShowCart={showCartHandler} />
              <ProductForm />
              <ProductList />
              {cartIsShown && <Cart onClose={hideCartHandler} />}
          </ListContextProvider>
      </CartContextProvider>
  );
};


export default App;