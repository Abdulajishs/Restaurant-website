import React from "react";

import classes from "./MealsItem.module.css"
import MealItemForm from "./MeaIItemForm";

const MealsList = (props) => {
    const price  =` $${props.price.toFixed(2)}`
    return (
        <li className={classes.meal} key={props.id}>
            <div>
                <h3>{props.name} </h3>
                <div className={classes.description}>{props.description} </div>
                <div className={classes.price}>{price} </div>
            </div>
            <div>
                <MealItemForm  item={props} />
                {/* {console.log(props,props.id)} */}
            </div>
        </li>
    )
}

export default MealsList;