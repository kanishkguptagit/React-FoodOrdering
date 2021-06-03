import React from "react";
import ReactDom from "react-dom";

import Card from "../Card/Card";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import ModalList from "./ModalList";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const PortalOverlay = (props) => {
  return (
    <Card className={styles.card}>
      {props.items.map((item) => (
        <ModalList key={item.id} id={item.id} name={item.name} price={item.price} />
      ))}
      <h3 className={styles.h3}>Total Amount</h3>
      <div className={styles.price}>$88.9</div>
      <div>
      <Button className={styles.closeButton} onClick={props.onClose} >Close</Button>
      <Button>Order</Button>
      </div>
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
        <PortalOverlay items={props.items} onClose={props.onClose} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
