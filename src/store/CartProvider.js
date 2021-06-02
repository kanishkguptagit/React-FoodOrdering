import CartContext from "./cart-context";

const CartProvider = (props) =>{

    const addItemHandlerCart = item => {};

    const removeItemHandlerCart = id => {};
    
    const cartContext = {
        items: [],
        totalAmount: 0,
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