import {useContext, useState } from "react";
import ListContext from "../../store/ListContext";

const ProductForm = () =>{

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState("");

    const cartCtx = useContext(ListContext);
    

    const enteredNameHandler = (event) =>{
          setName(event.target.value);
    }

    const enteredDescriptionHandler = (event) =>{
          setDescription(event.target.value);
    }

    const enteredPriceHandler = (event) =>{
          setPrice(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
       const medicineData = {
            name,
            description,
            price,
            quantity:1,
        }
        cartCtx.addItems(medicineData);
    }

     return (
        <section>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="name">Medicine Name</label>
                    <input type="text" id="name" value={name} onChange={enteredNameHandler}/>
                </div>
                <div>
                    <label htmlFor="description">Medicine Description</label>
                    <input type="text" id="description" value={description}  onChange={enteredDescriptionHandler}/>
                </div>
                <div>
                    <label htmlFor="name">Medicine Price</label>
                    <input type="number" id="name" value={price}  onChange={enteredPriceHandler}/>
                </div>
                <div>
                    <button>Add Product</button>
                </div>
            </form>
        </section>
     );
};

export default ProductForm;