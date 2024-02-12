import { useContext, useState } from "react"
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

const CartItem = ({item}) =>{

    const cartcntx = useContext(CartContext)

    const [enteredValue,setEnteredValue] = useState(item.quantity);

    const onChangeHandler = (event) =>{
        setEnteredValue(event.target.value);
    }

    const addItemToCart = (event) => {
        event.preventDefault();
        cartcntx.addItem({...item,quantity : 1});
    }

    const removeItemFromcart = (event) =>{
        event.preventDefault();
        cartcntx.removeItem({...item,quantity : 1})
    }

    return <div>
            <li key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.price} </h3>
                <Input input={{
                    id: "amount__" + item.id,
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    value:  item.quantity,
                    onChange:onChangeHandler
                }}/>
                <button onClick={removeItemFromcart} >-</button>
                <button onClick={addItemToCart}>+</button>
            </li>
            </div>
}

export default CartItem