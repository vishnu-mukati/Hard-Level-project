import React, { useContext } from "react";
import CartIcon from "../Cart/ChartIcon";
import classes from "./HeaderCartButton.module.css";
import Cartcontext from "../../store/CartContext"

const HeaderCardButton = (props) => {

  const Cartctx = useContext(Cartcontext);
  console.log(Cartctx);

  return (
    <button className={classes.button} onClick={props.onClick} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{Cartctx.totalItems}</span>
    </button>
  );
}

export default HeaderCardButton;