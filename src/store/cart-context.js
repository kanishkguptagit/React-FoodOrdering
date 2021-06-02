import React from "react";

const CartContext = React.createContext({
  cartData: [
    {
      id: "f1",
      name: "Sushi",
      price: "22.9",
      quantity: "2",
    },
  ],
});

export default CartContext;