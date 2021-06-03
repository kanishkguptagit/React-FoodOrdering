import React from "react";

const CartContext = React.createContext({
//   cartData: [
//     {
//       id: "f1",
//       name: "Sushi",
//       price: "22.9",
//       quantity: "2",
//     },
//   ],
    items: [],
    totalItems: 0,
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
});

export default CartContext;