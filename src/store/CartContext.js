import React, { useState } from "react";

const CartContext = React.createContext({
    cartItems: [],
    addcartItems: () => {},
    removeCart: () => {},
    totalItems: 0,
});

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    // Add items to the cart with quantity update logic
    const addcartItemsHandler = (name, description, price, quantity) => {
        setCartItems((prevItems) => {
            const updatedCartItems = [...prevItems];
            const existingCartItemIndex = updatedCartItems.findIndex(
                (item) => item.name === name
            );

            if (existingCartItemIndex !== -1) {
                // If item already exists, increase its quantity
                updatedCartItems[existingCartItemIndex].quantity += quantity;
            } else {
                // If item doesn't exist, add as a new item
                updatedCartItems.push({ name, description, price, quantity });
            }

            return updatedCartItems;
        });
    };

    // Function to clear the cart
    const removeCartHandler = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const cartValue = {
        cartItems: cartItems,
        addcartItems: addcartItemsHandler,
        removeCart: removeCartHandler,
        totalItems: totalItems,
    };

    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
