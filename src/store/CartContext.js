import React, { useEffect, useState } from "react";
import axios from "axios";
const CartContext = React.createContext({
    cartItems: [],
    addcartItems: () => { },
    removeCart: () => { },
    totalItems: 0,
    totalAmount: 0,
});

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
  
     console.log(cartItems);
    const url = 'https://crudcrud.com/api/e6dd61c061e64d0cb61d8df5e4ee7737'


    useEffect(() => {
        getdata()
    }, [])


    async function getdata() {
        try {
            const response = await axios.get(`${url}/cart`);
            setCartItems(response.data);
            console.log(response.data);
        } catch (err) {
            console.error("Error fetching cart data:", err.message);
        }
    }

    // Add items to the cart with quantity update logic
    async function addcartItemsHandler(dataobj) {
        const existingCartItemIndex = cartItems.findIndex((item) => item.data.name === dataobj.name);
        console.log(dataobj);
        console.log(cartItems);

        if (existingCartItemIndex === -1) {
            try {
                const response = await axios.post(`${url}/cart`, {
                    data: dataobj,
                })
                console.log(response.data);
                setCartItems((prevState) => {

                    return [...prevState, response.data];
                })
            } catch (err) {
                console.log(err.message)
            }
        } else {
            alert('this item is already present in the cart')
        }


    };


    // Function to clear the cart
    async function removeCartHandler() {

        try {
            const response = await axios.get(`${url}/cart`);
            const cartItems = response.data;
    
            await Promise.all(
                cartItems.map((item) => axios.delete(`${url}/cart/${item._id}`)),
                    setCartItems([])
            );
            
        } catch (err) {
            console.log(err.message);
        }

    };

    const totalItems = cartItems.reduce((total, item) => total + item.data.quantity, 0);
    
    console.log(totalItems);

    const cartValue = {
        cartItems: cartItems,
        addcartItems: addcartItemsHandler,
        removeCart: removeCartHandler,
        totalItems: totalItems,
        totalAmount: totalAmount,
    };

    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
