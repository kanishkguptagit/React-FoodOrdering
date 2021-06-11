import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import CartProvider from "./store/CartProvider";

function App() {

  return (
    <CartProvider>
      <Navigation />
      <Home />
      
    </CartProvider>
  );
}

export default App;
