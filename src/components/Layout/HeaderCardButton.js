import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCardButton.module.css"

const HeaderCardButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfItemsInCart = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.totalAmount;
    }, 0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfItemsInCart}
            </span>
        </button>
    )
}

export default HeaderCardButton;