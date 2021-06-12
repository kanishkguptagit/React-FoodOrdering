import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPostal = (value) => value.trim().length === 6;

const Checkout = (props) => {

    const [validForm, setValidForm] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    })

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const validName = isEmpty(enteredName);
    const validStreet = isEmpty(enteredStreet);
    const validCity = isEmpty(enteredCity);
    const validPostal = isPostal(enteredPostal);

    setValidForm ({
        name: !validName,
        street: !validStreet,
        postal: validPostal,
        city: !validCity,
    })

    const formIsValid = !validName && !validStreet && !validCity && validPostal;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    });
  };

  const classesName = `${classes.control} ${validForm.name ? '': classes.invalid}`
  const classesStreet = `${classes.control} ${validForm.street ? '': classes.invalid}`
  const classesPostal = `${classes.control} ${validForm.postal ? '': classes.invalid}`
  const classesCity = `${classes.control} ${validForm.city ? '': classes.invalid}`

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classesName}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!validForm.name && <p>Name must not be empty</p>}
      </div>
      <div className={classesStreet}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!validForm.street && <p>Street must not be empty</p>}
      </div>
      <div className={classesPostal}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!validForm.postal && <p>Invalid Postal Code</p>}
      </div>
      <div className={classesCity}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!validForm.city && <p>City must not be empty</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
