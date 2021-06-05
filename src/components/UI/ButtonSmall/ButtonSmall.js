import React from 'react';
import styles from './ButtonSmall.module.css';

const ButtonSmall = (props) => {

    const classes = styles.button+' '+props.className;

    return(
        <button className={classes} onClick={props.onClick}><b>{props.children}</b></button>
    )
}

export default ButtonSmall