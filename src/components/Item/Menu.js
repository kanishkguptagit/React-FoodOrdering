import React from "react";

import styles from "./Menu.module.css";
import MenuList from "./MenuList";
import Card from "../UI/Card/Card";

const Menu = (props) => {
  return (
    <Card className={styles.card}>
      {props.items.map((item) => (
        <MenuList
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
        />
      ))}
    </Card>
  );
};

export default Menu;
