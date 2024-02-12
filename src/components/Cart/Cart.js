import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cntx = useContext(CartContext);
    // const cartItems = <CartItem />

    const totalAmount = cntx.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes["cart-items"]}>
                {cntx.items.map(item => (
                    <CartItem item={item} />
                ))
            }
            </ul>
            <div>
                <span className={classes.total}>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;