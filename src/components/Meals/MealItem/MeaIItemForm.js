import React, { useContext, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"
import CartContext from "../../../store/cart-context";
const MealItemForm = (props) => {
    const cartcntx = useContext(CartContext);
    const [enteredValue,setEnteredValue]=useState(1);

    const onChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const addItemToCart = (event) => {
        event.preventDefault();
        cartcntx.addItem({...props.item,quantity : enteredValue});
    }

    return (
        <form className={classes.form}>
            <Input label="Amount"
                input={{
                    id: "amount_" + props.item.id,
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    value: enteredValue,
                    onChange:onChangeHandler
                }}
            />
            <button onClick={addItemToCart}>+ Add</button>
        </form>
    )
}

export default MealItemForm;