import React from "react";

import styles from "./ModalList.module.css";
import ButtonSmall from "../ButtonSmall/ButtonSmall";

const ModalList = (props) => {
  return (
    <React.Fragment>
      <div className={styles.info}>
        <h3>{props.name}</h3>
        <div className={styles.price}><b>${props.price}</b></div>
        <div className={styles.quatity}>x {props.amount}</div>
      </div>
      <div className={styles.book}>
          <ButtonSmall className={`${styles.butsmall}, ${styles.leftbut}`}>-</ButtonSmall>
          <ButtonSmall className={`${styles.butsmall}, ${styles.rightbut}`}>+</ButtonSmall>
      </div>
    <hr className={styles.modalhr} />
    </React.Fragment>
  );
};

export default ModalList;
