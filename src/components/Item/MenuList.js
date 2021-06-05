import React, { useRef, useContext } from "react";

import styles from "./MenuList.module.css";
import Button from "../UI/Button/Button";
import CartContext from "../../store/cart-context";

const MenuList = (props) => {

  const quantityRef = useRef();

  const ctx = useContext(CartContext)

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`${props.name} = ${quantityRef.current.value}`);
    const amount = quantityRef.current.value;
    const amountNumber = +amount;

    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amountNumber,
      price: props.price,
    })

  }

  return (
    <React.Fragment>
      <div className={styles.info}>
        <b>{props.name}</b>
        <br />
        <i>{props.desc}</i>
        <div className={styles.price}><b>${props.price}</b></div>
      </div>
      <div className={styles.book}>
          <label>Amount
          <input type="number" min="1" max="30" ref={quantityRef} defaultValue="1" ></input><br/>
          </label>
          <Button onClick={onSubmitHandler}>+Add</Button>
      </div>
    <hr />
    </React.Fragment>
  );
};

export default MenuList;
