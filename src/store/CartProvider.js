import { useState } from "react";
import CartContext from "./cart-context"

const CartProvider = (props) => {
    const [enteredItems,setEnteredItems]=useState([]);

    const addItemsToCartHandler = (item) => {
        const existingItemIndex = enteredItems.findIndex( (index) => index.id === item.id )
        if(existingItemIndex !== -1 ){
            const updatedItem = [...enteredItems];
            updatedItem[existingItemIndex].quantity = Number(updatedItem[existingItemIndex].quantity) + Number(item.quantity) ;
            setEnteredItems(updatedItem)
        }else{
            setEnteredItems((prevItems)=>[...prevItems,item]);
        }
    };

    const removeItemsFromCartHandler = (item) => {
        const existingItemIndex = enteredItems.findIndex( (index) => index.id === item.id )
        if(existingItemIndex !== -1 ){
            const updatedItem = [...enteredItems];
            updatedItem[existingItemIndex].quantity = Number(updatedItem[existingItemIndex].quantity) - Number(item.quantity) ;
            setEnteredItems(updatedItem)
        }else{
            setEnteredItems((prevItems)=>[...prevItems,item]);
        }
    }

    const cartContext = {
        items: enteredItems,
        totalAmount:0,
        addItem: addItemsToCartHandler,
        removeItem: removeItemsFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {console.log(cartContext)}
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;