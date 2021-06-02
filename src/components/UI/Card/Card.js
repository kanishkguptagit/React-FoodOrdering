import styles from './Card.module.css';

const Card = (props) => {

    const classes = styles.cardcss +' '+ props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;