import styles from './Button.module.css';

const Button = (props) => {
    const buttstyles = styles.button + ' '+ props.className;
    return (
        <button className={buttstyles} onClick={props.onClick} ><b>{props.children}</b></button>
    )
}

export default Button;