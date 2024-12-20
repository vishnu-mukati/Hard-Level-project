import React, { Fragment } from "react";
import classes from "./Header.module.css"
import HeaderCardButton from "./HeaderCartButton";


const Header = (props) => {
    return (
            <div>

            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCardButton onClick={props.onShowCart} />
            </header>
            </div>
           
    );
}

export default Header;