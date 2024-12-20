import React, { useState } from "react";
import ReactDOM from "react-dom";
import ListContext, { ListContextProvider } from "./store/ListContext";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

function App() {

  const [CartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  }

  const HideCardHandler = () => {
    setCartIsShown(false);
  }

  return (

    <div>

      <Header onShowCart={ShowCartHandler} />
      {CartIsShown && <Cart onClose={HideCardHandler} />}
        <div style={{ marginTop: "2rem" }}>
      <ProductForm />
        </div>
      <ProductList />
    </div>

  );
};


export default App;