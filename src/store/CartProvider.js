import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalItems: 0,
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        const updatedTotalItems = state.totalItems + action.item.amount;

        const itemPresent = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[itemPresent];

        let updatedItems;

        if(itemPresent>=0)
        {            
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            }
            updatedItems = [...state.items];
            updatedItems[itemPresent] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedAmount,
            totalItems: updatedTotalItems,
        }
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
        items: cartState.items,
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