import React, { useContext, Fragment } from "react";
import ListContext from "../../store/ListContext";
import CartContext from "../../store/CartContext";

const ProductList = () => {
    const listCtx = useContext(ListContext);
    const listItems = listCtx.item;

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (name, description, price, quantity) => {
        cartCtx.addcartItems(name, description, price, quantity);
    };

    return (
        <section>
            {listItems.map((item, index) => (
                <Fragment key={index}>
                    <div>
                        <h3>Medicine Name</h3>
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <h3>Medicine Description</h3>
                        <p>{item.description}</p>
                    </div>
                    <div>
                        <h3>Medicine Price</h3>
                        <p>{item.price}</p>
                    </div>
                    <div>
                        <h3>Medicine Quantity</h3>
                        <p>{item.quantity}</p>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                addToCartHandler(
                                    item.name,
                                    item.description,
                                    item.price,
                                    item.quantity
                                )
                            }
                        >
                            Add To Cart
                        </button>
                    </div>
                </Fragment>
            ))}
        </section>
    );
};

export default ProductList;
