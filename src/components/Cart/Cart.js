import React, { useState, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../../Modal/Modal";
import CartContext from "../../store/CartContext";
import { Container, Row, Col, Table } from "react-bootstrap";

const Card = (props) => {

   

    const Cartctx = useContext(CartContext);
    console.log(Cartctx.cartItems);
    const numberOfCartItems = Cartctx.cartItems.reduce((currTotal, item) => {
        
        return currTotal + item.data.price*item.data.quantity;
      }, 0)
      console.log(typeof(numberOfCartItems));
      console.log(numberOfCartItems);
    
    const cleanCartHandler = () =>{
        Cartctx.removeCart();
    }

    const cartitems = Cartctx.cartItems.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.data.name}</td>
                <td>{item.data.price}</td>
                <td>{item.data.quantity}</td>
            </tr>
        );
    })

    return (

        <Modal onClose={props.onClose}>
            <Container >
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Medicine Name</th>
                                    <th>Medicine Price</th>
                                    <th>Medicine Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartitems}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${numberOfCartItems}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button} onClick={cleanCartHandler}>Generate Bill</button>
            </div>
        </Modal>
    );
}

export default Card;