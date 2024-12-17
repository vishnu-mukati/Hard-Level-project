import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart = ({ onClose }) => {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.cartItems;

    return (
        <section style={{ border: "1px solid black", padding: "1rem" }}>
            <h2>Cart</h2>
            <button onClick={onClose} style={{ float: "right" }}>
                X
            </button>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>Description: {item.description}</p>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))
            ) : (
                <p>No items in the cart.</p>
            )}
        </section>
    );
};

export default Cart;
