import React,{provider} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartContextProvider } from './store/CartContext';
import { ListContextProvider } from './store/ListContext';


import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>  
  <ListContextProvider> 
    <App />
  </ListContextProvider>
</CartContextProvider>
);
