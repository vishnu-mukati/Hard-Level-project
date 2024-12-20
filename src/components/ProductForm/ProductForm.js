import { useContext, useState } from "react";
import classes from "./ProductForm.module.css";
import ListContext from "../../store/ListContext";

const ProductForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState("");
    const [showform, setShowForm] = useState(false);

    const cartCtx = useContext(ListContext);


    const enteredNameHandler = (event) => {
        setName(event.target.value);
    }

    const enteredDescriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const enteredPriceHandler = (event) => {
        setPrice(event.target.value);
    }

    const showFormHandler = () =>{
        setShowForm(true);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const medicineData = {
            name,
            description,
            price,
            quantity: 1,
        }
        setShowForm(false);
        cartCtx.addItems(medicineData);
        setName("");
        setDescription("");
        setPrice("");
    }

    return (
        <section className={classes.auth}>
           {showform ? <form onSubmit={formSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="name">Medicine Name</label>
                    <input type="text" id="name" value={name} onChange={enteredNameHandler} required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Medicine Description</label>
                    <input type="text" id="description" value={description} onChange={enteredDescriptionHandler} required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Medicine Price</label>
                    <input type="number" id="name" value={price} onChange={enteredPriceHandler} required/>
                </div>
                <div className={classes.actions}>
                    <button>Add Product</button>
                </div>
            </form> : <div  className={classes.actions}>
            <button onClick={showFormHandler}>Add Product</button>
            </div> }
        </section>
    );
};

export default ProductForm;