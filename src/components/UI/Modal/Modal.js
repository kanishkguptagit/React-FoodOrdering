import React, { useContext, useState } from "react";
import ReactDom from "react-dom";

import Card from "../Card/Card";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import ModalList from "./ModalList";
import CartContext from "../../../store/cart-context";
import Checkout from "../../checkout/Checkout";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const PortalOverlay = (props) => {

  const [checkout, setCheckout] = useState(false);

  const ctx = useContext(CartContext);
  const hasItems = ctx.totalItems > 0;
  const displayAmount = ctx.totalAmount.toFixed(2);

  const checkoutHandler = () =>{
    setCheckout(true);
  }

  const deleteHandler = (id) => {
    ctx.removeItem(id);
  }

  const addHandler = (item) => {
    ctx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  }

  const submitOrderHandler = (userData) => {
    fetch('https://foodordering-33b2c-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',{
      method:'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: ctx.items,
      })
    });
  }

  const modalButtons = (<div className={styles.buttons}>
    <Button className={styles.closeButton} onClick={props.onClose}>
      Close
    </Button>
    {hasItems && <Button onClick={checkoutHandler}>Order</Button>}
  </div>);

  return (
    <Card className={styles.card}>
      <div className={styles.listitem}>
        {ctx.items.map((item) => (
          <ModalList
            key={item.id}            
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={deleteHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)}
          />
        ))}
      </div>
      <span>
        <h3 className={styles.h3}>Total Amount</h3>
      </span>
      <span>
        <div className={styles.price}>${displayAmount}</div>
      </span>
      {checkout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!checkout && modalButtons}
    </Card>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <PortalOverlay onClose={props.onClose} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
