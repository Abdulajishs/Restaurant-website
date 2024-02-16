import { useContext} from "react"
// import Input from "../UI/Input";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css"

const CartItem = (props) => {

    const { item } = props;

    const cartcntx = useContext(CartContext)

    // const [enteredValue, setEnteredValue] = useState(item.quantity);

    // const onChangeHandler = (event) => {
    //     setEnteredValue(event.target.value);
    // }

    const addItemToCart = (event) => {
        event.preventDefault();
        cartcntx.addItem({ ...item, quantity: 1 });
    }

    const removeItemFromcart = (event) => {
        event.preventDefault();
        cartcntx.removeItem({ ...item, quantity: 1 })
    }

    return (
        <li key={item.id} className={classes['cart-item']}>
            <div>
                <h2>{item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{item.price} </span>
                    <span className={classes.amount}>x {item.quantity}</span>
                    {/* <span className={classes.amount}>
                        <Input input={{
                            id: "amount__" + item.id,
                            type: "number",
                            min: 0,
                            max: 5,
                            step: 1,
                            value: item.quantity,
                            onChange: onChangeHandler
                        }} />
                    </span> */}
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={removeItemFromcart} >-</button>
                <button onClick={addItemToCart}>+</button>
            </div>
        </li>
    )
}

export default CartItem