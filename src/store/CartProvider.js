import { useState } from "react";
import CartContext from "./cart-context"

const CartProvider = (props) => {
    const [enteredItems,setEnteredItems]=useState([]);

    const addItemsToCartHandler = (item) => {
        const existingItemIndex = enteredItems.findIndex( (ele) => ele.id === item.id )
        
        if(existingItemIndex !== -1 ){
            const updatedItem = [...enteredItems];
            updatedItem[existingItemIndex].quantity = Number(updatedItem[existingItemIndex].quantity) + Number(item.quantity) ;
            setEnteredItems(updatedItem)
            console.log( enteredItems[existingItemIndex].quantity);
        }else{
            setEnteredItems((prevItems)=>[...prevItems,item]);
        }
    };

    const removeItemsFromCartHandler = (item) => {
        const existingItemIndex = enteredItems.findIndex( (ele) => ele.id === item.id )
        
        if(existingItemIndex !== -1 ){
            const updatedItem = [...enteredItems];
            updatedItem[existingItemIndex].quantity = Number(updatedItem[existingItemIndex].quantity) - Number(item.quantity) ;
            if(updatedItem[existingItemIndex].quantity <=0){
                updatedItem.splice(existingItemIndex,1)
            }
            setEnteredItems(updatedItem)
            console.log( enteredItems[existingItemIndex].quantity);
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