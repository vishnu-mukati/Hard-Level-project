import React, { useState, useContext, Fragment } from "react";
import CartContext from "../../store/CartContext";

const Header = ({ onShowCart }) => {
    const [showCart, setShowCart] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.totalItems;
   console.log(totalCartItems);
    const showCartButton = () => {
        setShowCart(true);
        onShowCart(); // Pass control to show the cart component
    };

    return (
        <Fragment>
            <header >
                <h1>Medicine Inventory</h1>
                <button onClick={showCartButton}>
                    Cart ({totalCartItems}) {/* Display total items */}
                </button>
            </header>
        </Fragment>
    );
};

export default Header;
