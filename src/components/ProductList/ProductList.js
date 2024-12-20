import React, { useContext, Fragment } from "react";
import {Container,Row,Col,Button,Table} from "react-bootstrap"
import ListContext from "../../store/ListContext";
import CartContext from "../../store/CartContext";
import classes from "./ProductList.module.css"


const ProductList = () => {
    const listCtx = useContext(ListContext);
    const listItems = listCtx.item;
    const cartCtx = useContext(CartContext);


    const addToCartHandler = (index,name, description, price, quantity) => {
        const dataobj = {
            id : index,
            name : name,
            description : description,
            price: price,
            quantity:quantity,
        }
        cartCtx.addcartItems(dataobj);
        console.log(dataobj);
    };

    return (

        <Container >
            <Row>
                <Col>
                <Table className={classes.table} striped bordered hover>
                    <thead className={classes.thead}>
                        <tr>
                            <th >Medicine Name</th>
                            <th>Medicine Descripion</th>
                            <th>Medicine Price</th>
                            <th>Medicine Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems.map((item,index)=>{
                            return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td  style={{justifyContent:"space-evenly"}}>{ item.quantity}{<Button onClick={(()=>{addToCartHandler(index,item.name,item.description,item.price,item.quantity)})}>Add To Cart</Button>}</td>
                                    </tr>
                            );
                        })}
                    </tbody>
                    <tfoot></tfoot>
                </Table>
                </Col>
            </Row>
        </Container>

    );
};

export default ProductList;
