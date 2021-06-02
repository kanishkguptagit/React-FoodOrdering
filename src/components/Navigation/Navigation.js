import React, { useState } from "react";

import styles from "./Navigation.module.css";
import logo from "../../images/carticon.png";
import Modal from "../UI/Modal/Modal";

const Navigation = (props) => {
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    if (IsModalOpen) setIsModalOpen(false);
    else setIsModalOpen(true);
  };

  return (
    <React.Fragment>
      {IsModalOpen && <Modal items={props.items} onClose={modalHandler} />}
      <div className={styles.nav}>
        <h2>ReactMeals</h2>
        <div className={styles.cartitems} onClick={modalHandler}>
          <img className={styles.img} src={logo} alt="carticon" />
          <div className={styles.yourcart}>Your Cart</div>
          <div className={styles.quantity}>
            <div>2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
