import React, { Fragment } from "react";
import CartIcon from "../Card/CardIcon";

import classes from "./HeaderCardButton.module.css"

const HeaderCardButton = (props) =>{
    return(
        <Fragment>
            <button className={classes.button}> 
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>
                    3
                </span>
            </button>
        </Fragment>
    )
}

export default HeaderCardButton;