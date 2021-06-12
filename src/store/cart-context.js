import React from "react";

const CartContext = React.createContext({
    items: [],
    totalItems: 0,
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {},
});

export default CartContext;