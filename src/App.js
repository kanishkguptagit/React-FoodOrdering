import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import CartProvider from "./store/CartProvider";

const DEMO_DATA = [
  {
    id: "f1",
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: "22.9"
  },
  {
    id: "f2",
    name: "Schnitez",
    desc: "A german speciality",
    price: "16.5"
  },
  {
    id: "f3",
    name: "Barbecue Burger",
    desc: "KFC Berger",
    price: "20.2"
  },
  {
    id: "f4",
    name: "Green Bowl",
    desc: "Healthy... and green...",
    price: "18.99"
  },
]

function App() {
  return (
    <CartProvider>
      <Navigation items={DEMO_DATA} />
      <Home items={DEMO_DATA} />
      
    </CartProvider>
  );
}

export default App;
