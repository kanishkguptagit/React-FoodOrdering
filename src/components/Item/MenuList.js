import React, {useRef} from "react";

import styles from "./MenuList.module.css";
import Button from "../UI/Button/Button";

const MenuList = (props) => {

  const quantityRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`${props.name} = ${quantityRef.current.value}`);
    quantityRef.current.value='';
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
          <input type="number" ref={quantityRef} ></input><br/>
          </label>
          <Button onClick={onSubmitHandler} >+Add</Button>
      </div>
    <hr />
    </React.Fragment>
  );
};

export default MenuList;
