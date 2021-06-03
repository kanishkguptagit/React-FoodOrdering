import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalItems: 0,
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.totalAmount; //needs checking
    }
    return defaultCartState;
}

const CartProvider = (props) =>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemHandlerCart = item => {
        dispatchCartAction({type: 'ADD', item:item});
    };

    const removeItemHandlerCart = id => {
        dispatchCartAction({type: 'REMOVE', id:id })
    };
    
    const cartContext = {
        items: cartState.item,
        totalItems: cartState.totalItems,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandlerCart,
        removeItem: removeItemHandlerCart,
    }

    return(
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;