import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import Menu from "./components/Item/Menu";

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
    name: "Barbecue Berger",
    desc: "KFC Berger",
    price: "20.2"
  },
]

function App() {
  return (
    <React.Fragment>
      <Navigation items={DEMO_DATA} />
      <Home />
      <Menu items={DEMO_DATA} />
    </React.Fragment>
  );
}

export default App;
